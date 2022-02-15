import {
	Credentials,
	Hub,
	Logger,
	StorageHelper,
	UniversalStorage,
} from '@aws-amplify/core';
import {
	AuthenticationDetails,
	CognitoUser,
	CognitoUserAttribute,
	CognitoUserPool,
	CognitoUserSession,
	CookieStorage,
	IAuthenticationCallback,
	ICognitoUserData,
	ICognitoUserPoolData,
	ISignUpResult,
	NodeCallback,
} from 'amazon-cognito-identity-js';
import { dispatchAuthEvent } from '../AuthPlug';
import {
	AuthErrorTypes,
	AuthOptions,
	CurrentUserOpts,
	isUsernamePasswordOpts,
	SignOutOpts,
	SignUpParams,
	UsernamePasswordOpts,
} from '../types';
import { AuthProvider } from '../types/Provider';

const logger = new Logger('AuthClass');
const OAUTH_FLOW_MS_TIMEOUT = 10 * 1000;
const USER_ADMIN_SCOPE = 'aws.cognito.signin.user.admin';

export class AWSCognitoProvider implements AuthProvider {
	static readonly CATEGORY = 'Auth';
	static readonly PROVIDER_NAME = 'AWSCognito';
	private _storage;
	private _storageSync;
	private pendingSignIn;
	private userPool: CognitoUserPool = null;
	Credentials = Credentials;
	private _config;
	private oAuthFlowInProgress: boolean = false;

	constructor(config?: AuthOptions) {
		this._config = config ? config : {};

		Hub.listen('auth', ({ payload }) => {
			const { event } = payload;
			switch (event) {
				case 'signIn':
					this._storage.setItem('amplify-signin-with-hostedUI', 'false');
					break;
				case 'signOut':
					this._storage.removeItem('amplify-signin-with-hostedUI');
					break;
				case 'cognitoHostedUI':
					this._storage.setItem('amplify-signin-with-hostedUI', 'true');
					break;
			}
		});
	}

	configure(config?: AuthOptions) {
		this._config = Object.assign({}, this._config, config);
		const {
			userPoolId,
			userPoolWebClientId,
			cookieStorage,
			oauth,
			region,
			identityPoolId,
			mandatorySignIn,
			refreshHandlers,
			identityPoolRegion,
			clientMetadata,
			endpoint,
		} = this._config;

		if (!this._config?.storage) {
			// backward compatability
			if (cookieStorage) this._storage = new CookieStorage(cookieStorage);
			else {
				this._storage = this._config['ssr']
					? new UniversalStorage()
					: new StorageHelper().getStorage();
			}
		} else {
			if (!this._isValidAuthStorage(this._config['storage'])) {
				logger.error('The storage in the Auth config is not valid!');
				throw new Error('Empty storage object');
			}
			this._storage = this._config['storage'];
		}

		this._storageSync = Promise.resolve();
		if (typeof this._storage['sync'] === 'function') {
			this._storageSync = this._storage['sync']();
		}

		if (userPoolId) {
			const userPoolData: ICognitoUserPoolData = {
				UserPoolId: userPoolId,
				ClientId: userPoolWebClientId,
				endpoint,
			};
			userPoolData.Storage = this._storage;

			this.userPool = new CognitoUserPool(
				userPoolData,
				this.wrapRefreshSessionCallback
			);
		}

		// creds configure
		this.Credentials.configure({
			mandatorySignIn,
			region: identityPoolRegion || region,
			userPoolId,
			identityPoolId,
			refreshHandlers,
			storage: this._storage,
		});

		// dispatchAuthEvent(
		// 	'configured',
		// 	null,
		// 	`The Auth category has been configured successfully`
		// );
		return this._config;
	}

	getCategory(): string {
		return AWSCognitoProvider.CATEGORY;
	}

	getProviderName(): string {
		return AWSCognitoProvider.PROVIDER_NAME;
	}

	signIn(
		usernameOrSignInOpts: string | UsernamePasswordOpts,
		pw?: string,
		clientMetadata?: { [key: string]: string }
	): Promise<CognitoUser | any> {
		if (!this.userPool) {
			return Promise.reject(' No user pool');
		}

		let username = null;
		let password = null;
		let validationData = {};

		// for backward compatibility
		if (typeof usernameOrSignInOpts === 'string') {
			username = usernameOrSignInOpts;
			password = pw;
		} else if (isUsernamePasswordOpts(usernameOrSignInOpts)) {
			if (typeof pw !== 'undefined') {
				logger.warn(
					'The password should be defined under the first parameter object!'
				);
			}
			username = usernameOrSignInOpts.username;
			password = usernameOrSignInOpts.password;
			validationData = usernameOrSignInOpts.validationData;
		} else {
			return Promise.reject(AuthErrorTypes.InvalidUsername);
		}
		if (!username) {
			return Promise.reject(AuthErrorTypes.EmptyUsername);
		}
		const authDetails = new AuthenticationDetails({
			Username: username,
			Password: password,
			ValidationData: validationData,
			ClientMetadata: clientMetadata,
		});
		if (password) {
			return this.signInWithPassword(authDetails);
		} else {
			return this.signInWithoutPassword(authDetails);
		}
	}

	signUp(
		params: string | SignUpParams,
		...restOfAttrs: string[]
	): Promise<ISignUpResult> {
		return Promise.resolve({} as ISignUpResult);
	}
	signOut(opts?: SignOutOpts): Promise<any> {
		return Promise.resolve('signedOut');
	}

	private _isValidAuthStorage(obj) {
		// We need to check if the obj has the functions of Storage
		return (
			!!obj &&
			typeof obj.getItem === 'function' &&
			typeof obj.setItem === 'function' &&
			typeof obj.removeItem === 'function' &&
			typeof obj.clear === 'function'
		);
	}

	wrapRefreshSessionCallback = (callback: NodeCallback.Any) => {
		const wrapped: NodeCallback.Any = (error, data) => {
			if (data) {
				dispatchAuthEvent('tokenRefresh', undefined, `New token retrieved`);
			} else {
				dispatchAuthEvent(
					'tokenRefresh_failure',
					error,
					`Failed to retrieve new token`
				);
			}
			return callback(error, data);
		};
		return wrapped;
	};

	/**
	 * Sign in with a password
	 * @private
	 * @param {AuthenticationDetails} authDetails - the user sign in data
	 * @return - A promise resolves the CognitoUser object if success or mfa required
	 */
	private signInWithPassword(
		authDetails: AuthenticationDetails
	): Promise<CognitoUser | any> {
		if (this.pendingSignIn) {
			throw new Error('Pending sign-in attempt already in progress');
		}

		const user = this.createCognitoUser(authDetails.getUsername());

		this.pendingSignIn = new Promise((resolve, reject) => {
			user.authenticateUser(
				authDetails,
				this.authCallbacks(
					user,
					value => {
						this.pendingSignIn = null;
						resolve(value);
					},
					error => {
						this.pendingSignIn = null;
						reject(error);
					}
				)
			);
		});

		return this.pendingSignIn;
	}

	/**
	 * Sign in without a password
	 * @private
	 * @param {AuthenticationDetails} authDetails - the user sign in data
	 * @return - A promise resolves the CognitoUser object if success or mfa required
	 */
	private signInWithoutPassword(
		authDetails: AuthenticationDetails
	): Promise<CognitoUser | any> {
		const user = this.createCognitoUser(authDetails.getUsername());
		user.setAuthenticationFlowType('CUSTOM_AUTH');

		return new Promise((resolve, reject) => {
			user.initiateAuth(authDetails, this.authCallbacks(user, resolve, reject));
		});
	}

	private createCognitoUser(username: string): CognitoUser {
		const userData: ICognitoUserData = {
			Username: username,
			Pool: this.userPool,
		};
		userData.Storage = this._storage;

		const { authenticationFlowType } = this._config;

		const user = new CognitoUser(userData);
		if (authenticationFlowType) {
			user.setAuthenticationFlowType(authenticationFlowType);
		}
		return user;
	}

	/**
	 * Return an object with the authentication callbacks
	 * @param {CognitoUser} user - the cognito user object
	 * @param {} resolve - function called when resolving the current step
	 * @param {} reject - function called when rejecting the current step
	 * @return - an object with the callback methods for user authentication
	 */
	private authCallbacks(
		user: CognitoUser,
		resolve: (value?: CognitoUser | any) => void,
		reject: (value?: any) => void
	): IAuthenticationCallback {
		const that = this;
		return {
			onSuccess: async session => {
				logger.debug(session);
				delete user['challengeName'];
				delete user['challengeParam'];
				try {
					await this.Credentials.clear();
					const cred = await this.Credentials.set(session, 'session');
					logger.debug('succeed to get cognito credentials', cred);
				} catch (e) {
					logger.debug('cannot get cognito credentials', e);
				} finally {
					try {
						// In order to get user attributes and MFA methods
						// We need to trigger currentUserPoolUser again
						// const currentUser = await this.currentUserPoolUser();
						// that.user = currentUser;
						// dispatchAuthEvent(
						// 	'signIn',
						// 	currentUser,
						// 	`A user ${user.getUsername()} has been signed in`
						// );
						resolve('currentUser');
					} catch (e) {
						logger.error('Failed to get the signed in user', e);
						reject(e);
					}
				}
			},
			onFailure: err => {
				logger.debug('signIn failure', err);
				dispatchAuthEvent(
					'signIn_failure',
					err,
					`${user.getUsername()} failed to signin`
				);
				reject(err);
			},
			customChallenge: challengeParam => {
				logger.debug('signIn custom challenge answer required');
				user['challengeName'] = 'CUSTOM_CHALLENGE';
				user['challengeParam'] = challengeParam;
				resolve(user);
			},
			mfaRequired: (challengeName, challengeParam) => {
				logger.debug('signIn MFA required');
				user['challengeName'] = challengeName;
				user['challengeParam'] = challengeParam;
				resolve(user);
			},
			mfaSetup: (challengeName, challengeParam) => {
				logger.debug('signIn mfa setup', challengeName);
				user['challengeName'] = challengeName;
				user['challengeParam'] = challengeParam;
				resolve(user);
			},
			newPasswordRequired: (userAttributes, requiredAttributes) => {
				logger.debug('signIn new password');
				user['challengeName'] = 'NEW_PASSWORD_REQUIRED';
				user['challengeParam'] = {
					userAttributes,
					requiredAttributes,
				};
				resolve(user);
			},
			totpRequired: (challengeName, challengeParam) => {
				logger.debug('signIn totpRequired');
				user['challengeName'] = challengeName;
				user['challengeParam'] = challengeParam;
				resolve(user);
			},
			selectMFAType: (challengeName, challengeParam) => {
				logger.debug('signIn selectMFAType', challengeName);
				user['challengeName'] = challengeName;
				user['challengeParam'] = challengeParam;
				resolve(user);
			},
		};
	}

	/**
	 * Get current authenticated user
	 * @return - A promise resolves to current authenticated CognitoUser if success
	 */
	public currentUserPoolUser(
		params?: CurrentUserOpts
	): Promise<CognitoUser | any> {
		if (!this.userPool) {
			return Promise.reject('No userpool present');
		}

		return new Promise((res, rej) => {
			this._storageSync
				.then(async () => {
					if (this.isOAuthInProgress()) {
						logger.debug('OAuth signIn in progress, waiting for resolution...');

						await new Promise(res => {
							const timeoutId = setTimeout(() => {
								logger.debug('OAuth signIn in progress timeout');

								Hub.remove('auth', hostedUISignCallback);

								res();
							}, OAUTH_FLOW_MS_TIMEOUT);

							Hub.listen('auth', hostedUISignCallback);

							function hostedUISignCallback({ payload }) {
								const { event } = payload;

								if (
									event === 'cognitoHostedUI' ||
									event === 'cognitoHostedUI_failure'
								) {
									logger.debug(`OAuth signIn resolved: ${event}`);
									clearTimeout(timeoutId);

									Hub.remove('auth', hostedUISignCallback);

									res();
								}
							}
						});
					}

					const user = this.userPool.getCurrentUser();

					if (!user) {
						logger.debug('Failed to get user from user pool');
						rej('No current user');
						return;
					}

					const clientMetadata = this._config.clientMetadata; // TODO: verify behavior if this is override during signIn

					// refresh the session if the session expired.
					user.getSession(
						async (err, session) => {
							if (err) {
								logger.debug('Failed to get the user session', err);
								rej(err);
								return;
							}

							// get user data from Cognito
							const bypassCache = params ? params.bypassCache : false;

							if (bypassCache) {
								await this.Credentials.clear();
							}

							const clientMetadata = this._config.clientMetadata; // TODO: verify behavior if this is override during signIn

							// validate the token's scope first before calling this function
							const { scope = '' } = session.getAccessToken().decodePayload();
							if (scope.split(' ').includes(USER_ADMIN_SCOPE)) {
								user.getUserData(
									(err, data) => {
										if (err) {
											logger.debug('getting user data failed', err);
											// Make sure the user is still valid
											if (
												err.message === 'User is disabled.' ||
												err.message === 'User does not exist.' ||
												err.message === 'Access Token has been revoked' // Session revoked by another app
											) {
												rej(err);
											} else {
												// the error may also be thrown when lack of permissions to get user info etc
												// in that case we just bypass the error
												res(user);
											}
											return;
										}
										const preferredMFA = data.PreferredMfaSetting || 'NOMFA';
										const attributeList = [];

										for (let i = 0; i < data.UserAttributes.length; i++) {
											const attribute = {
												Name: data.UserAttributes[i].Name,
												Value: data.UserAttributes[i].Value,
											};
											const userAttribute = new CognitoUserAttribute(attribute);
											attributeList.push(userAttribute);
										}

										const attributes = this.attributesToObject(attributeList);
										Object.assign(user, { attributes, preferredMFA });
										return res(user);
									},
									{ bypassCache, clientMetadata }
								);
							} else {
								logger.debug(
									`Unable to get the user data because the ${USER_ADMIN_SCOPE} ` +
										`is not in the scopes of the access token`
								);
								return res(user);
							}
						},
						{ clientMetadata }
					);
				})
				.catch(e => {
					logger.debug('Failed to sync cache info into memory', e);
					return rej(e);
				});
		});
	}

	public currentSession(): Promise<CognitoUserSession> {
		const that = this;
		logger.debug('Getting current session');
		// Purposely not calling the reject method here because we don't need a console error
		if (!this.userPool) {
			return Promise.reject();
		}

		return new Promise((res, rej) => {
			that
				.currentUserPoolUser()
				.then(user => {
					that
						.userSession(user)
						.then(session => {
							res(session as CognitoUserSession);
							return;
						})
						.catch(e => {
							logger.debug('Failed to get the current session', e);
							rej(e);
							return;
						});
				})
				.catch(e => {
					logger.debug('Failed to get the current user', e);
					rej(e);
					return;
				});
		});
	}
	/**
	 * Get the corresponding user session
	 * @param {Object} user - The CognitoUser object
	 * @return - A promise resolves to the session
	 */
	public userSession(user): Promise<CognitoUserSession> {
		if (!user) {
			logger.debug('the user is null');
			//@ts-ignore
			return Promise.reject(AuthErrorTypes.NoUserSession);
		}
		const clientMetadata = this._config.clientMetadata; // TODO: verify behavior if this is override during signIn

		return new Promise((resolve, reject) => {
			logger.debug('Getting the session from this user:', user);
			user.getSession(
				(err, session) => {
					if (err) {
						logger.debug('Failed to get the session from user', user);
						reject(err);
						return;
					} else {
						logger.debug('Succeed to get the user session', session);
						resolve(session);
						return;
					}
				},
				{ clientMetadata }
			);
		});
	}

	private isOAuthInProgress(): boolean {
		return this.oAuthFlowInProgress;
	}

	private attributesToObject(attributes) {
		const obj = {};
		if (attributes) {
			attributes.map(attribute => {
				if (
					attribute.Name === 'email_verified' ||
					attribute.Name === 'phone_number_verified'
				) {
					obj[attribute.Name] =
						attribute.Value.toLowerCase() === 'true' ||
						attribute.Value === true;
				} else {
					obj[attribute.Name] = attribute.Value;
				}
			});
		}
		return obj;
	}
}
