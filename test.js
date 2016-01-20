import test from 'ava';
import m from './';

test(t => {
	t.same(m([1, 2, 3, 4], {count: 1}).length, 1);
	t.same(m([1, 2, 3, 4], {count: 3}).length, 3);
	t.notSame(m([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], {count: 5}), [1, 2, 3, 4, 5]);
	t.doesNotThrow(() => m([1]));
	t.same(m([1]).length, 1);
	t.throws(() => m('1'), 'Expected an array as the first argument');
	t.throws(() => m([1, 2, 3, 4], {count: 5}), 'Count must be lower or the same as the number of picks');
});
