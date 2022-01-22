module.exports = {
	globals: {
		'ts-jest': {
			tsConfig: {
				esModuleInterop: true,
				jsx: 'react',
			},
			diagnostics: false,
		},
	},
	preset: 'ts-jest',
	testEnvironment: 'node',
};
