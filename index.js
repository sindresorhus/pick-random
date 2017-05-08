'use strict';
module.exports = (data, opts = {count: 1}) => {
	data = data.slice();

	let count = opts.count;

	if (!Array.isArray(data)) {
		throw new TypeError('Expected an Array as the first argument');
	}

	if (count > data.length) {
		throw new Error('Count must be lower or the same as the number of picks');
	}

	const ret = [];

	while (count--) {
		ret.push(data.splice(Math.floor(Math.random() * data.length), 1)[0]);
	}

	return ret;
};
