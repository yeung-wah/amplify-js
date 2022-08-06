import { CognitoUser } from 'amazon-cognito-identity-js';
import { ClientMetaData, SignInOpts } from './Auth';

export interface AuthProvider {
	getCategory(): string;

	// return the name of you provider
	getProviderName(): string;

	configure(config: object): object;

	/**
	 * Sign in
	 * @param {String | SignInOpts} usernameOrSignInOpts - The username to be signed in or the sign in options
	 * @param {String} password - The password of the username
	 * @return - A promise resolves the CognitoUser
	 */
	signIn(
		usernameOrSignInOpts: string | SignInOpts,
		pw?: string,
		clientMetadata?: ClientMetaData
	): Promise<CognitoUser | any>;
}
