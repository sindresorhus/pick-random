export interface Options {
	/**
	The number of picks.

	Must be smaller or the same length as `input`.

	@default 1
	*/
	readonly count?: number;
}

/**
Pick random items from a list.

@example
```
import pickRandom from 'pick-random';

pickRandom(['Sindre', 'Stephen', 'Unicorn', 'Pascal', 'Addy', 'Pony'], {count: 2});
//=> ['Unicorn', 'Pony']
```
*/
export default function pickRandom<T>(input: readonly T[], options?: Options): T[];
