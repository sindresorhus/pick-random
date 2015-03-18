#!/usr/bin/env node
'use strict';
var stdin = require('get-stdin');
var meow = require('meow');
var pickRandom = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ pick-random <arg> <arg> ... [--count <count>]',
		'  $ cat newline-separated-picks.txt | pick-random',
		'',
		'Example',
		'  $ pick-random unicorn rainbow cake pony --count 2',
		'  pony',
		'  rainbow',
		'',
		'  $ pick-random yes no',
		'  $ pick-random $(seq 54) --count 6'
	].join('\n')
});

function init(data) {
	console.log(pickRandom(data, {count: cli.flags.count}).join('\n'));
}

if (process.stdin.isTTY) {
	if (cli.input.length === 0) {
		console.error('Input required');
		process.exit(1);
	}

	init(cli.input);
} else {
	stdin(function (data) {
		init(data.trim().split('\n'));
	});
}
