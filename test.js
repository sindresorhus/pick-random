import test from 'ava';
import m from './';

test(t => {
	t.same(m([1, 2, 3, 4], {count: 1}).length, 1);
	t.same(m([1, 2, 3, 4], {count: 3}).length, 3);
	t.notSame(m([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], {count: 5}), [1, 2, 3, 4, 5]);
});
