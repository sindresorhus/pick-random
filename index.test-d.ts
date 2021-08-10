import {expectType, expectError} from 'tsd';
import pickRandom from './index.js';

expectType<string[]>(pickRandom(['foo']));
expectType<string[]>(pickRandom(['foo', 'bar']));
expectType<number[]>(pickRandom([1, 2, 3]));
expectType<number[]>(pickRandom([1, 2, 3], {count: 3}));
expectType<string[][]>(pickRandom([['foo'], ['bar']], {count: 2}));
expectError(pickRandom(1));
