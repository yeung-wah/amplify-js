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
	CognitoUserPool,
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
	isUsernamePasswordOpts,
	SignOutOpts,
	SignUpParams,
	UsernamePasswordOpts,
} from '../types';
import { AuthProvider } from '../types/Provider';

const logger = new Logger('AuthClass');

export class AWSCognitoProvider implements AuthProvider {
	static readonly CATEGORY = 'Auth';
	static readonly PROVIDER_NAME = 'AWSCognito';
	private _storage;
	private _storageSync;
	private pendingSignIn;
	private userPool: CognitoUserPool = null;
	Credentials = Credentials;
	private _config;

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
}
