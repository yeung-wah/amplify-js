#!/usr/bin/env node

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { checkDuplicates } = require('./commands/check-duplicates');
const { matchingVersion } = require('./commands/matching-versions');

const argv = yargs(hideBin(process.argv))
	.option('matching-versions', {
		alias: 'm',
		type: 'string',
		description:
			'Show matching package versions based on specified aws-amplfy version',
	})
	.argv;

if (argv.m === '' || argv.m) {
	matchingVersion(argv.m);
} else {
	checkDuplicates(argv);
}
