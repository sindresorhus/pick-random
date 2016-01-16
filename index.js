'use strict';
module.exports = function (data, options) {
	options = options || {};
	data = data.slice();

	var count = Number(options.count) || 1;
	var ret = [];

	if (!Array.isArray(data)) {
		throw new TypeError('Expected an array as the first argument');
	}

	if (count > data.length) {
		throw new Error('Count must be lower or the same as the number of picks');
	}

	while (count--) {
		ret.push(data.splice(Math.floor(Math.random() * data.length), 1)[0]);
	}

	return ret;
};
