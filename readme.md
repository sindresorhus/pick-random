# pick-random

> Pick random items from a list

Useful for making decisions, picking a winner, or anything else randomness can help you with.

## Install

```
$ npm install pick-random
```

## Usage

```js
import pickRandom from 'pick-random';

pickRandom(['Sindre', 'Stephen', 'Unicorn', 'Pascal', 'Addy', 'Pony'], {count: 2});
//=> ['Unicorn', 'Pony']
```

### pickRandom(input, options?)

Returns an `Array`.

#### input

Type: `Array`

The list to pick from.

#### options

Type: `object`

##### count

Type: `number`\
Default: `1`

The number of picks.

Must be smaller or the same length as `input`.

## Related

- [pick-random-cli](https://github.com/sindresorhus/pick-random-cli) - CLI for this module
