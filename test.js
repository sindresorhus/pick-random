'use strict';
var assert = require('assert');
var pickRandom = require('./');

it('should pick random items from an array', function () {
	assert.strictEqual(pickRandom([1, 2, 3, 4], {count: 1}).length, 1);
	assert.strictEqual(pickRandom([1, 2, 3, 4], {count: 3}).length, 3);

	assert.notDeepEqual(
		pickRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], {count: 5}),
		[1, 2, 3, 4, 5]
	);
});

it('should not throw if array length is same as count', function () {
	assert.doesNotThrow(function (){
		pickRandom([1], {count:1});
	});
	assert.doesNotThrow(function (){
		pickRandom([1,2], {count:2});
	});
	assert.strictEqual(pickRandom([1], {count: 1}).length, 1);
	assert.deepEqual(
		pickRandom([1], {count: 1}),
		[1]
	);
	assert.deepEqual(
		pickRandom([1,2], {count: 2}).sort(),
		[1,2]
	);
});
