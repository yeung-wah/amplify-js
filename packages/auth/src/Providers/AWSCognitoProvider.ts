import {
	Credentials,
	Logger,
	StorageHelper,
	UniversalStorage,
} from '@aws-amplify/core';
import {
	CognitoUserPool,
	CookieStorage,
	ICognitoUserPoolData,
	ISignUpResult,
	NodeCallback,
} from 'amazon-cognito-identity-js';
import { SignUpParams } from '../../lib-esm';
import { dispatchAuthEvent } from '../AuthPlug';
import { AuthOptions, SignOutOpts, UsernamePasswordOpts } from '../types';
import { AuthProvider } from '../types/Provider';

const logger = new Logger('AuthClass');

export class AWSCognitoProvider implements AuthProvider {
	static readonly CATEGORY = 'Auth';
	static readonly PROVIDER_NAME = 'AWSCognito';
	private _storage;
	private _storageSync;
	private userPool: CognitoUserPool = null;
	Credentials = Credentials;

	configure(config: AuthOptions): object {
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
		} = config || {};

		if (!config['storage']) {
			// backward compatability
			if (cookieStorage) this._storage = new CookieStorage(cookieStorage);
			else {
				this._storage = config['ssr']
					? new UniversalStorage()
					: new StorageHelper().getStorage();
			}
		} else {
			if (!this._isValidAuthStorage(config['storage'])) {
				logger.error('The storage in the Auth config is not valid!');
				throw new Error('Empty storage object');
			}
			this._storage = config['storage'];
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

		dispatchAuthEvent(
			'configured',
			null,
			`The Auth category has been configured successfully`
		);
		return config;
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
	): Promise<any> {
		return Promise.resolve('signedIn');
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
}
