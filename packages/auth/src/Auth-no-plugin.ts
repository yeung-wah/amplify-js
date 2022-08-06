import Amplify, { Logger, Parser } from '@aws-amplify/core';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { AuthOptions } from './types';
import { AuthProvider, ClientMetaData, SignInOpts } from './types';

const logger = new Logger('AuthClass experimental');

class AuthClass {
	private _config: AuthOptions;
	private _pluggables: AuthProvider[];

	constructor(config) {
		this._pluggables = [];
		this.configure(config);
	}
	configure(config: AuthOptions) {
		if (!config) return this._config || {};
		logger.debug('configure Auth');
		const conf = Object.assign(
			{},
			this._config,
			Parser.parseMobilehubConfig(config).Auth,
			config
		);
		this._config = conf;
		this._pluggables.forEach(pluggable => {
			pluggable.configure(this._config);
		});
	}

	public getModuleName() {
		return 'Storage';
	}

	/**
	 * Sign in
	 * @param {String | SignInOpts} usernameOrSignInOpts - The username to be signed in or the sign in options
	 * @param {String} password - The password of the username
	 * @return - A promise resolves the CognitoUser
	 */
	public signIn(
		usernameOrSignInOpts: string | SignInOpts,
		pw?: string,
		clientMetadata?: ClientMetaData
	): Promise<CognitoUser | any> {
		if (this._pluggables.length > 0) {
			return this._pluggables[0].signIn(
				usernameOrSignInOpts,
				pw,
				clientMetadata
			);
		}
		throw new Error('Auth plugin missing, did you call Auth.addPluggable()?');
	}

	/**
	 * add plugin into Storage category
	 * @param {Object} pluggable - an instance of the plugin
	 */
	public addPluggable(pluggable: AuthProvider) {
		if (pluggable && pluggable.getCategory() === 'Auth') {
			this._pluggables.push(pluggable);
			let config = {};

			config = pluggable.configure(this._config[pluggable.getProviderName()]);

			return config;
		}
	}

	/**
	 * Get the plugin object
	 * @param providerName - the name of the plugin
	 */
	public getPluggable(providerName: string) {
		const pluggable = this._pluggables.find(
			pluggable => pluggable.getProviderName() === providerName
		);
		if (pluggable === undefined) {
			logger.debug('No plugin found with providerName', providerName);
			return null;
		} else return pluggable;
	}

	/**
	 * Remove the plugin object
	 * @param providerName - the name of the plugin
	 */
	public removePluggable(providerName: string) {
		this._pluggables = this._pluggables.filter(
			pluggable => pluggable.getProviderName() !== providerName
		);
		return;
	}
}

export const Auth = new AuthClass(null);

Amplify.register(Auth);
