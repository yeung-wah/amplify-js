import { AuthNext } from '../src/AuthNext';
import { AuthFlowType } from '../src/types';
// import { randomDelay } from './utils';
import { AuthenticationHelper } from '../src/ProviderDefault/srp';
import * as createBigInteger from 'big-integer';

AuthNext.configure({
	region: 'us-west-2',
	userPoolId: 'us-west-2_Jw5spDH5N',
	userPoolWebClientId: '3lm8kka38317l1n4rhjmusae0r',
});

(async (): Promise<void> => {
	// const signUpResponse = await AuthNext.signUp({
	// 	username: 'harrysolovay@gmail.com',
	// 	password: 'Testingthis123!',
	// });
	// console.log(signUpResponse);

	undefined;

	// const resendSignUpCodeResponse = await AuthNext.resendSignUpCode({
	//  username: 'harrysolovay@gmail.com',
	// });
	// console.log(resendSignUpCodeResponse);

	undefined;

	// const confirmSignUpResponse = await AuthNext.confirmSignUp({
	// 	username: 'harrysolovay@gmail.com',
	// 	code: '845742',
	// });
	// console.log(confirmSignUpResponse);

	undefined;

	const authHelper = new AuthenticationHelper('Jw5spDH5N');
	authHelper.getLargeAValue(async (_, value) => {
		const SRP_A = value.toString();
		// console.log(SRP_A);
		const initAuthFlowResponse = await AuthNext.initiateAuth({
			AuthFlow: AuthFlowType.USER_SRP_AUTH,
			AuthParameters: {
				USERNAME: 'harrysolovay@gmail.com',
				PASSWORD: 'Testingthis123!',
				SRP_A,
			},
		});
		authHelper.getPasswordAuthenticationKey(
			'harrysolovay@gmail.com',
			'Testingthis123!',
			createBigInteger(initAuthFlowResponse.ChallengeParameters.SRP_B, 16),
			createBigInteger(initAuthFlowResponse.ChallengeParameters.SALT, 16),
			(error, success) => {
				if (error) {
					console.log(error);
				} else {
					console.log(success);
				}
			}
		);

		// authHelper.calculateS(
		// 	undefined as any,
		// 	createBigInteger(initAuthFlowResponse.ChallengeParameters.SRP_B),
		// 	(error, success) => {
		// 		console.log({ error, success });
		// 	}
		// );
		// // initAuthFlowResponse.ChallengeParameters
		// console.log(initAuthFlowResponse);
	});

	undefined;
})();
