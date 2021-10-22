const core_externals = [];

const analytics_externals = [
	'@aws-amplify/cache',
	'@aws-amplify/core',
];

const api_externals = [
	'@aws-amplify/auth',
	'@aws-amplify/cache',
	'@aws-amplify/core',
	'@aws-amplify/api-graphql',
	'@aws-amplify/api-rest',
];

const api_graphql_externals = [
	'@aws-amplify/auth',
	'@aws-amplify/cache',
	'@aws-amplify/core',
	'@aws-amplify/api-rest',
	'@aws-amplify/pubsub',
];
const api_rest_externals = [
	'@aws-amplify/core',
];


const auth_externals = [
	'@aws-amplify/cache',
	'@aws-amplify/core',
];

const cache_externals = ['@aws-amplify/core'];

const storage_externals = ['@aws-amplify/core'];

const interactions_externals = [
	'@aws-amplify/core',
];

const xr_externals = ['@aws-amplify/core'];

const pubsub_externals = [
	'@aws-amplify/auth',
	'@aws-amplify/cache',
	'@aws-amplify/core'
];

const predictions_externals = [
	'@aws-amplify/core',
	'@aws-amplify/storage',
];

const amplify_externals = [
	'@aws-amplify/analytics',
	'@aws-amplify/api',
	'@aws-amplify/auth',
	'@aws-amplify/cache',
	'@aws-amplify/core',
	"@aws-amplify/datastore",
	"@aws-amplify/geo",
	'@aws-amplify/interactions',
	"@aws-amplify/predictions",
	'@aws-amplify/pubsub',
	'@aws-amplify/storage',
	'@aws-amplify/ui',
	'@aws-amplify/xr'
];

const datastore_externals = [
	'@aws-amplify/auth',
	'@aws-amplify/core',
	'@aws-amplify/api',
	'@aws-amplify/pubsub',
];

const geo_externals = [
	'@aws-amplify/core'
]

const esbuild_externals = {
	'@aws-amplify/analytics': analytics_externals,
	'@aws-amplify/api': api_externals,
	'@aws-amplify/api-graphql': api_graphql_externals,
	'@aws-amplify/api-rest': api_rest_externals,
	'@aws-amplify/auth': auth_externals,
	'aws-amplify': amplify_externals,
	'@aws-amplify/cache': cache_externals,
	'@aws-amplify/core': core_externals,
	'@aws-amplify/datastore': datastore_externals,
	'@aws-amplify/geo': geo_externals,
	'@aws-amplify/interactions': interactions_externals,
	'@aws-amplify/predictions': predictions_externals,
	'@aws-amplify/pubsub': pubsub_externals,
	'@aws-amplify/storage': storage_externals,
	'@aws-amplify/xr': xr_externals,
};

module.exports = esbuild_externals;