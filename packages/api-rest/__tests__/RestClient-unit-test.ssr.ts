/**
 * @jest-environment node
 */

import { Signer } from '@aws-amplify/core';
import axios from 'axios';

jest
	.spyOn(Signer, 'sign')
	.mockImplementation(
		(request: any, access_info: any, service_info?: any) => request
	);

jest.mock('axios', () =>
	jest.fn(signedParams => {
		return new Promise((res, rej) => {
			const withCredentialsSuffix =
				signedParams && signedParams.withCredentials ? '-withCredentials' : '';
			if (signedParams && signedParams.headers && signedParams.headers.reject) {
				rej({
					data: 'error' + withCredentialsSuffix,
				});
			} else if (signedParams && signedParams.responseType === 'blob') {
				res({
					data: 'blob' + withCredentialsSuffix,
				});
			} else {
				res({
					data: 'data' + withCredentialsSuffix,
				});
			}
		});
	})
);

import { RestClient } from '../src/RestClient';

describe('RestClient test', () => {
	test('should not perform FormData check in Node', async () => {
		const apiOptions = {
			headers: {},
			endpoints: {},
			credentials: {
				accessKeyId: 'accessKeyId',
				secretAccessKey: 'secretAccessKey',
				sessionToken: 'sessionToken',
			},
		};

		const restClient = new RestClient(apiOptions);

		expect(
			await restClient.ajax('url', 'method', {
				body: 'data',
			})
		).toEqual('data');
	});
});
