const { ErrorMessages } = require('../error-messages');
const { log, error } = require('../util');
const fetch = require('node-fetch');

const matchingVersion = async arg => {
	if (!arg) {
		log(ErrorMessages.MATCHING_VERSION_NO_INPUT);
		return;
	}
	// the regex below can be improved to filter only amplify packages.
	const versionRegex = /^(@?[a-zA-Z\/-]+)@([0-9.a-zA-Z\-]+)$/;
	const match = versionRegex.exec(arg);
	if (!match) {
		error(ErrorMessages.MATCHING_VERSION_NO_INPUT);
		return;
	}

	const package = match[1];
	const version = match[2];

	const npmRegistry = `https://registry.npmjs.org/${package}/${version}`;
	try {
		const gitHead = await fetch(npmRegistry)
			.then(res => res.json())
			.then(json => json.gitHead);
		if (!gitHead) {
			error(`ERROR: no amplify package found named ${arg}`);
			return;
		}
		const githubPath = `https://api.github.com/repos/aws-amplify/amplify-js/commits/${gitHead}`;
		const message = await fetch(githubPath)
			.then(res => res.json())
			.then(json => json.commit.message)
			.then(message =>
				message
					.split('\n')
					.slice(2)
					.join('\n')
			);
		log('Matching versions are: \n');
		log(message);
	} catch (e) {
		error(e);
	}
};

module.exports = { matchingVersion };
