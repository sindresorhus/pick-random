# pick-random

> Pick random items from a list

Useful for making decisions, picking a winner, or anything else randomness can help you with.

## Install

```
$ npm install pick-random
```

## Usage

```js
const pickRandom = require('pick-random');

pickRandom(['Sindre', 'Stephen', 'Unicorn', 'Pascal', 'Addy', 'Pony'], {count: 2});
//=> ['Unicorn', 'Pony']
```

### pickRandom(input, options?)

Returns an `Array`.

#### input

Type: `Array`

List to pick from.

#### options

Type: `object`

##### count

Type: `number`\
Default: `1`

Number of picks.

Must be smaller or the same length as `input`.

## Related

- [pick-random-cli](https://github.com/sindresorhus/pick-random-cli) - CLI for this module
