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
		throw new Error('options.count must be lower or equal to the the number of picks');
	}

	if (count === data.length) {
		return data;
	}

	while (count--) {
		ret.push(data.splice(Math.floor(Math.random() * data.length), 1)[0]);
	}

	return ret;
};
