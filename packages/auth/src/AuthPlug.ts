/*
 * Copyright 2017-2022 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

import {
	Amplify,
	ConsoleLogger as Logger,
	Hub,
	Parser,
} from '@aws-amplify/core';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { AWSCognitoProvider } from './Providers/AWSCognitoProvider';
import { UsernamePasswordOpts, SignUpParams } from './types';
import { AuthProvider } from './types/Provider';

const logger = new Logger('AuthClass');

const DEFAULT_PROVIDER = 'AWSCognito';

const AMPLIFY_SYMBOL = (
	typeof Symbol !== 'undefined' && typeof Symbol.for === 'function'
		? Symbol.for('amplify_default')
		: '@@amplify_default'
) as Symbol;

export const dispatchAuthEvent = (
	event: string,
	data: any,
	message: string
) => {
	Hub.dispatch('auth', { event, data, message }, 'Auth', AMPLIFY_SYMBOL);
};

export class AuthPlugClass {
	private _config;
	// not array only one plugin at a time
	private _pluggables: AuthProvider[];

	constructor() {
		this._config = {};
		this._pluggables = [];
	}

	public getModuleName() {
		return 'Auth';
	}

	/**
	 * Add plugin into Auth category
	 * @param {Object} pluggable - an instance of the plugin
	 */
	public addPluggable(pluggable: AuthProvider) {
		if (pluggable && pluggable.getCategory() === 'Auth') {
			// auth will work with only one plugin ATM
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

	/**
	 * Configure auth
	 * @param {Object} config - Configuration object for auth
	 * @return {Object} - Current configuration
	 */
	configure(config?) {
		logger.debug('configuring Auth', config);
		if (!config) return this._config;

		this._config = Object.assign(
			{},
			this._config,
			Parser.parseMobilehubConfig(config).Auth,
			config
		);

		this._pluggables.forEach(pluggable => {
			pluggable.configure(this._config[pluggable.getProviderName()]);
		});

		if (this._pluggables.length === 0) {
			this.addPluggable(new AWSCognitoProvider());
		}

		dispatchAuthEvent(
			'configured',
			null,
			`The Auth category has been configured successfully`
		);
		logger.debug('current configuration', this._config);
		return this._config;
	}

	public async signIn(
		usernameOrSignInOpts: string | UsernamePasswordOpts,
		pw?: string,
		clientMetadata?: { [key: string]: string },
		config?: any
	): Promise<CognitoUser | any> {
		const provider = config?.provider || DEFAULT_PROVIDER;
		const prov = this._pluggables.find(
			pluggable => pluggable.getProviderName() === provider
		);
		if (prov === undefined) {
			logger.debug('No plugin found with providerName', provider);
			return Promise.reject('No plugin found ');
		}
		const signInResponse = prov.signIn(
			usernameOrSignInOpts,
			pw,
			clientMetadata
		);

		return signInResponse;
	}
}

export const AuthPlug = new AuthPlugClass();

Amplify.register(AuthPlug);
