const ErrorMessages = {
	NO_NODE_MODULES:
		'ERROR: No `node_modules` was found. Make sure you ran `npm install` or `yarn install`.',
	NO_AMPLIFY_FOUND:
		'ERROR: No amplify modules were found. See Getting Started (https://docs.amplify.aws/start/)' +
		'for additional help.',
	DUPLICATE_VERSIONS:
		'ERROR: We detected duplicated Amplify packages in node_modules. ' +
		'Please upgrade your packages to latest: \n\n' +
		'$ yarn upgrade --latest --pattern aws-amplify\n' +
		'OR\n' +
		'$ npx npm-check-updates -i "/@?aws-amplify/" && npm update\n\n' +
		'To stay on previous versions of Amplify, please run\n' +
		'$ amplify-diagnose -m',
	MATCHING_VERSION_NO_INPUT:
		'Usage:\n  $ amplify-diagnose -m [package-name]@[package-version]' +
		'\nExample:\n  $ amplify-diagnose aws-amplify@3.2.1',
};

module.exports = { ErrorMessages };
