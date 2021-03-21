'use strict';

module.exports = (data, {count = 1} = {}) => {
	data = data.slice();

	if (!Array.isArray(data)) {
		throw new TypeError('Expected an Array as the first argument');
	}

	if (count > data.length) {
		throw new Error('Count must be lower or the same as the number of picks');
	}

	const pickedElements = [];

	while (count--) {
		pickedElements.push(data.splice(Math.floor(Math.random() * data.length), 1)[0]);
	}

	return pickedElements;
};
