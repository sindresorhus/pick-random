#!/usr/bin/env node
'use strict';
var stdin = require('get-stdin');
var argv = require('minimist')(process.argv.slice(2));
var pkg = require('./package.json');
var pickRandom = require('./index');
var input = argv._;

function help() {
	console.log([
		pkg.description,
		'',
		'Usage',
		'  $ pick-random <arg> <arg> ... [--count <count>]',
		'  $ cat newline-separated-picks.txt | pick-random',
		'',
		'Example',
		'  $ pick-random unicorn rainbow cake pony --count 2',
		'  pony',
		'  rainbow'
	].join('\n'));
}

function init(data) {
	console.log(pickRandom(data, {count: argv.count}).join('\n'));
}

if (argv.help) {
	help();
	return;
}

if (argv.version) {
	console.log(pkg.version);
	return;
}

if (process.stdin.isTTY) {
	if (input.length === 0) {
		help();
		return;
	}

	init(input);
} else {
	stdin(function (data) {
		init(data.trim().split('\n'));
	});
}
