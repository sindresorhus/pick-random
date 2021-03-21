declare namespace pickRandom {
	interface Options {
        /**
        Amount of elements to pick.

        @default 1
        */
        count?: number;
    }
}

/**
Pick random items from a list

@example
```
import pickRandom from 'pick-random'

pickRandom(['Sindre', 'Stephen', 'Unicorn', 'Pascal', 'Addy', 'Pony']);
//=> ['Unicorn']

pickRandom(['Sindre', 'Stephen', 'Unicorn', 'Pascal', 'Addy', 'Pony'], {count: 2});
//=> ['Unicorn', 'Pony']
```
*/
declare function pickRandom<T>(data: T[], options?: pickRandom.Options): T[];

export = pickRandom;
