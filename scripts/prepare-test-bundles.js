const fs = require('fs');
const path = require('path');

const packages = [
	'analytics',
	'api',
	'api-graphql',
	'api-rest',
	'auth',
	'cache',
	'core',
	'datastore',
	'geo',
	'interactions',
	'predictions',
	'pubsub',
	'storage',
	'xr'
];

function copyBundlesForTest() {
	const packagesUrl = {};

	for (const package of packages) {
		const pkgRootPath = path.resolve(process.cwd(), `./packages/${package}/`);
		const packageJsonPath = path.join(pkgRootPath, 'package');
		const packageInfo = require(packageJsonPath);
		const { version } = packageInfo;
		const src = path.join(pkgRootPath, `dist/${package}-esm.js`);
		const dstDirectory = path.resolve(process.cwd(), `./dist/packages/${package}/${version}/`)
		const dst = path.join(dstDirectory, `${package}-esm.js`);

		if (!fs.existsSync(dstDirectory)) {
			fs.mkdirSync(dstDirectory, { recursive: true });
		}

		fs.copyFileSync(src, dst);

		packagesUrl[package] = `http://localhost:8080/packages/${package}/${version}/${package}-esm.js`;
	}

	fs.writeFileSync(path.resolve(process.cwd(), './dist/modules.js'), `export default ${JSON.stringify(packagesUrl, null, 2)}`);
}

copyBundlesForTest();