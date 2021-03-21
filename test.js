import test from 'ava';
import pickRandom from './index.js';

test('main', t => {
	t.is(pickRandom([1, 2, 3, 4], {count: 0}).length, 0);
	t.is(pickRandom([1, 2, 3, 4], {count: 1}).length, 1);
	t.is(pickRandom([1, 2, 3, 4], {count: 3}).length, 3);
	t.notDeepEqual(pickRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], {count: 5}), [1, 2, 3, 4, 5]);
	t.notThrows(() => {
		pickRandom([1]);
	});
	t.is(pickRandom([1]).length, 1);
	t.throws(() => {
		pickRandom('1');
	}, 'Expected an Array as the first argument');
	t.throws(() => {
		pickRandom([1, 2, 3, 4], {count: 5});
	}, 'Count must be lower or the same as the number of picks');
});
