const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const { ErrorMessages } = require('./error-messages');

const nodeModulesPath = rootDir => `${rootDir}/node_modules`;
const scopedAmplifyPath = rootDir => `${rootDir}/node_modules/@aws-amplify`;
const globalAmplifyPath = rootDir => `${rootDir}/node_modules/aws-amplify`;

const error = message => {
	console.error(chalk.redBright(message));
};

const log = message => {
	console.log(chalk.greenBright(message));
};

const hasYarn = () => {
	return (
		fs.existsSync(path.resolve(process.cwd(), 'yarn.lock')) ||
		fs.existsSync(path.resolve(process.cwd(), '.yarnrc'))
	);
};

const reportDuplicateError = () => {
	error(ErrorMessages.DUPLICATE_VERSIONS);
};

const checkAmplifyExists = () => {
	const rootDir = process.cwd();
	if (!fs.existsSync(nodeModulesPath(rootDir))) {
		error(ErrorMessages.NO_NODE_MODULES);
		process.exit(0);
	} else if (
		!fs.existsSync(globalAmplifyPath(rootDir)) &&
		!fs.existsSync(scopedAmplifyPath(rootDir))
	) {
		error(ErrorMessages.NO_AMPLIFY_FOUND);
		process.exit(0);
	}
};

const reportNoError = () => {
	log('Successfully completed all checks. No issues detected.');
};

module.exports = {
	error,
	log,
	hasYarn,
	reportDuplicateError,
	reportNoError,
	nodeModulesPath,
	scopedAmplifyPath,
	globalAmplifyPath,
	checkAmplifyExists,
};
