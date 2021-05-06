const fs = require('fs');
const { ErrorMessages } = require('../error-messages');
const {
	checkAmplifyExists,
	reportDuplicateError,
	scopedAmplifyPath,
	globalAmplifyPath,
	reportNoError,
} = require('../util');

let duplciatesDetected = false;

const checkScopedAmplifyVersions = async (dir, depth) => {
	const parentDir = scopedAmplifyPath(dir);
	if (!fs.existsSync(parentDir)) return;

	const packages = await fs.promises.readdir(parentDir);

	if (packages.length == 0) return;
	if (depth > 0) {
		// nested packages are detected
		duplciatesDetected = true;
	}

	for (const package of packages) {
		const pkgDir = `${parentDir}/${package}`;
		await checkAmplifyVersions(pkgDir, depth + 1); // look for nested amplify pkgs
	}
};

const checkGlobalAmplifyVersion = async (dir, depth) => {
	const pkgDir = globalAmplifyPath(dir);
	if (!fs.existsSync(pkgDir)) return;
	await checkAmplifyVersions(pkgDir, depth + 1); // look for nested amplify pkgs
};

const checkAmplifyVersions = async (dir, depth = 0) => {
	await checkScopedAmplifyVersions(dir, depth);
	await checkGlobalAmplifyVersion(dir, depth);
};

const checkDuplicates = async () => {
	checkAmplifyExists();
	await checkAmplifyVersions(process.cwd(), 0);
	duplciatesDetected ? reportDuplicateError() : reportNoError();
};

module.exports = { checkDuplicates };
