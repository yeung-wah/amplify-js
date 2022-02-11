import { makeQuerablePromise, StorageHelper } from '@aws-amplify/core';
import { AWSCognitoProvider } from '.';
import { AuthOptions } from '../types';
import { AuthProvider } from '../types/Provider';

const logger = new Logger('AuthClass');

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

	get() {
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

		// if (!this._isExpired(cred) && this._isPastTTL()) {
		// 	logger.debug('ttl has passed but token is not yet expired');
		// 	try {
		// 		const user = await Auth.currentUserPoolUser();
		// 		const session = await Auth.currentSession();
		// 		const refreshToken = session.refreshToken;
		// 		const refreshRequest = new Promise((res, rej) => {
		// 			user.refreshSession(refreshToken, (err, data) => {
		// 				return err ? rej(err) : res(data);
		// 			});
		// 		});
		// 		await refreshRequest; // note that rejections will be caught and handled in the catch block.
		// 	} catch (err) {
		// 		// should not throw because user might just be on guest access or is authenticated through federation
		// 		logger.debug('Error attempting to refreshing the session', err);
		// 	}
		// }

		return Auth.currentUserCredentials();
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
}
