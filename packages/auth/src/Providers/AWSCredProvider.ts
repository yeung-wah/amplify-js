import {
	getAmplifyUserAgent,
	Logger,
	makeQuerablePromise,
	StorageHelper,
} from '@aws-amplify/core';
import { AuthPlug } from '../AuthPlug';
import { AuthOptions } from '../types';
import { AuthProvider } from '../types/Provider';
import {
	CognitoIdentityClient,
	GetIdCommand,
	GetCredentialsForIdentityCommand,
} from '@aws-sdk/client-cognito-identity';
import { CredentialProvider } from '@aws-sdk/types';

const logger = new Logger('AuthClass');
const CREDENTIALS_TTL = 50 * 60 * 1000; // 50 min, can be modified on config if required in the future

export interface ICredentials {
	accessKeyId: string;
	sessionToken: string;
	secretAccessKey: string;
	identityId: string;
	authenticated: boolean;
	// Long term creds do not provide an expiration date
	expiration?: Date;
}

export class AWSCredProvider implements AuthProvider {
	static readonly CATEGORY = 'Auth';
	static readonly PROVIDER_NAME = 'AWSCred';
	private _config;
	private _refreshHandlers = {};
	private _storage;
	private _storageSync;
	private _gettingCredPromise = null;
	private _credentials;
	private _nextCredentialsRefresh: Number;
	private _identityId;
	private _credentials_source;

	configure(config: AuthOptions) {
		this._config = Object.assign({}, this._config, config);
		const { refreshHandlers } = this._config;
		// If the developer has provided an object of refresh handlers,
		// then we can merge the provided handlers with the current handlers.
		if (refreshHandlers) {
			this._refreshHandlers = {
				...this._refreshHandlers,
				...refreshHandlers,
			};
		}

		this._storage = this._config.storage;

		if (!this._storage) {
			this._storage = new StorageHelper().getStorage();
		}

		this._storageSync = Promise.resolve();
		if (typeof this._storage['sync'] === 'function') {
			this._storageSync = this._storage['sync']();
		}

		return this._config;
	}

	getCategory(): string {
		return AWSCredProvider.CATEGORY;
	}

	getProviderName(): string {
		return AWSCredProvider.PROVIDER_NAME;
	}

	getCreds() {
		logger.debug('getting credentials');
		return this._pickupCredentials();
	}

	private _pickupCredentials() {
		logger.debug('picking up credentials');
		if (!this._gettingCredPromise || !this._gettingCredPromise.isPending()) {
			logger.debug('getting new cred promise');
			this._gettingCredPromise = makeQuerablePromise(this._keepAlive());
		} else {
			logger.debug('getting old cred promise');
		}
		return this._gettingCredPromise;
	}

	private async _keepAlive() {
		logger.debug('checking if credentials exists and not expired');
		const cred = this._credentials;
		if (cred && !this._isExpired(cred) && !this._isPastTTL()) {
			logger.debug('credentials not changed and not expired, directly return');
			return Promise.resolve(cred);
		}

		logger.debug('need to get a new credential or refresh the existing one');

		const session = await AuthPlug.currentSession();
		if (!this._isExpired(cred) && this._isPastTTL()) {
			logger.debug('ttl has passed but token is not yet expired');
			try {
				const user = await AuthPlug.currentUserPoolUser();
				//@ts-ignore
				const refreshToken = session.refreshToken;
				const refreshRequest = new Promise((res, rej) => {
					//@ts-ignore
					user.refreshSession(refreshToken, (err, data) => {
						return err ? rej(err) : res(data);
					});
				});
				await refreshRequest; // note that rejections will be caught and handled in the catch block.
			} catch (err) {
				// should not throw because user might just be on guest access or is authenticated through federation
				logger.debug('Error attempting to refreshing the session', err);
			}
		}
		//refactor this with set only

		logger.debug('getting session success', session);
		return this._setCredentialsFromSession(session);
	}

	private _isExpired(credentials): boolean {
		if (!credentials) {
			logger.debug('no credentials for expiration check');
			return true;
		}
		logger.debug('are these credentials expired?', credentials);
		const ts = Date.now();

		/* returns date object.
			https://github.com/aws/aws-sdk-js-v3/blob/v1.0.0-beta.1/packages/types/src/credentials.ts#L26
		*/
		const { expiration } = credentials;
		return expiration.getTime() <= ts;
	}

	private _isPastTTL(): boolean {
		return this._nextCredentialsRefresh <= Date.now();
	}

	private _setCredentialsFromSession(session): Promise<ICredentials> {
		logger.debug('set credentials from session');
		const idToken = session.getIdToken().getJwtToken();
		const { region, userPoolId, identityPoolId } = this._config;
		if (!identityPoolId) {
			logger.debug('No Cognito Federated Identity pool provided');
			//@ts-ignore
			return Promise.reject('No Cognito Federated Identity pool provided');
		}
		if (!region) {
			logger.debug('region is not configured for getting the credentials');
			//@ts-ignore
			return Promise.reject(
				'region is not configured for getting the credentials'
			);
		}
		const key = 'cognito-idp.' + region + '.amazonaws.com/' + userPoolId;
		const logins = {};
		logins[key] = idToken;

		const cognitoClient = new CognitoIdentityClient({
			region,
			customUserAgent: getAmplifyUserAgent(),
		});

		/* 
			Retreiving identityId with GetIdCommand to mimic the behavior in the following code in aws-sdk-v3:
			https://git.io/JeDxU

			Note: Retreive identityId from CredentialsProvider once aws-sdk-js v3 supports this.
		*/
		const credentialsProvider: CredentialProvider = async () => {
			// try to fetch the local stored guest identity, if found, we will associate it with the logins
			// const guestIdentityId = await this._getGuestIdentityId();

			let generatedOrRetrievedIdentityId;
			// if (!guestIdentityId) {
			// for a first-time user, this will return a brand new identity
			// for a returning user, this will retrieve the previous identity assocaited with the logins
			const { IdentityId } = await cognitoClient.send(
				new GetIdCommand({
					IdentityPoolId: identityPoolId,
					Logins: logins,
				})
			);
			generatedOrRetrievedIdentityId = IdentityId;
			// }

			const {
				Credentials: { AccessKeyId, Expiration, SecretKey, SessionToken },
				// single source of truth for the primary identity associated with the logins
				// only if a guest identity is used for a first-time user, that guest identity will become its primary identity
				IdentityId: primaryIdentityId,
			} = await cognitoClient.send(
				new GetCredentialsForIdentityCommand({
					// IdentityId: guestIdentityId || generatedOrRetrievedIdentityId,
					IdentityId: generatedOrRetrievedIdentityId,
					Logins: logins,
				})
			);

			this._identityId = primaryIdentityId;
			// if (guestIdentityId) {
			// 	// if guestIdentity is found and used by GetCredentialsForIdentity
			// 	// it will be linked to the logins provided, and disqualified as an unauth identity
			// 	logger.debug(
			// 		`The guest identity ${guestIdentityId} has been successfully linked to the logins`
			// 	);
			// 	if (guestIdentityId === primaryIdentityId) {
			// 		logger.debug(
			// 			`The guest identity ${guestIdentityId} has become the primary identity`
			// 		);
			// 	}
			// 	// remove it from local storage to avoid being used as a guest Identity by _setCredentialsForGuest
			// 	await this._removeGuestIdentityId();
			// }

			// https://github.com/aws/aws-sdk-js-v3/blob/main/packages/credential-provider-cognito-identity/src/fromCognitoIdentity.ts#L40
			return {
				accessKeyId: AccessKeyId,
				secretAccessKey: SecretKey,
				sessionToken: SessionToken,
				expiration: Expiration,
				identityId: primaryIdentityId,
			};
		};

		const credentials = credentialsProvider().catch(async err => {
			throw err;
		});

		return this._loadCredentials(credentials, 'userPool', true, null);
	}

	private _loadCredentials(
		credentials,
		source,
		authenticated,
		info
	): Promise<ICredentials> {
		const that = this;
		return new Promise((res, rej) => {
			credentials
				.then(async credentials => {
					logger.debug('Load credentials successfully', credentials);
					if (this._identityId && !credentials.identityId) {
						credentials['identityId'] = this._identityId;
					}

					that._credentials = credentials;
					that._credentials.authenticated = authenticated;
					that._credentials_source = source;
					that._nextCredentialsRefresh = new Date().getTime() + CREDENTIALS_TTL;
					if (source === 'federated') {
						const user = Object.assign(
							{ id: this._credentials.identityId },
							info.user
						);
						const { provider, token, expires_at, identity_id } = info;
						try {
							this._storage.setItem(
								'aws-amplify-federatedInfo',
								JSON.stringify({
									provider,
									token,
									user,
									expires_at,
									identity_id,
								})
							);
						} catch (e) {
							logger.debug('Failed to put federated info into auth storage', e);
						}
					}
					// if (source === 'guest') {
					// 	await this._setGuestIdentityId(credentials.identityId);
					// }
					res(that._credentials);
					return;
				})
				.catch(err => {
					if (err) {
						logger.debug('Failed to load credentials', credentials);
						logger.debug('Error loading credentials', err);
						rej(err);
						return;
					}
				});
		});
	}
}
