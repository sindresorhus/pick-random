# pick-random [![Build Status](https://travis-ci.org/sindresorhus/pick-random.svg?branch=master)](https://travis-ci.org/sindresorhus/pick-random)

> Pick random items from a list

Useful for making decisions, picking a winner, or anything else randomness can help you with.


## CLI

```
$ npm install --global pick-random
```

```
$ pick-random --help

  Usage
    $ pick-random <arg> <arg> ... [--count <count>]
    $ cat newline-separated-picks.txt | pick-random

  Example
    $ pick-random unicorn rainbow cake pony --count 2
    pony
    rainbow

    $ pick-random yes no
    $ pick-random $(seq 54) --count 6
```


## API

```
$ npm install --save pick-random
```

```js
var pickRandom = require('pick-random');

pickRandom(['Sindre', 'Stephen', 'Unicorn', 'Pascal', 'Addy', 'Pony'], {count: 2});
//=> ['Unicorn', 'Pony']
```

### pickRandom(list, options)

Returns an `array`.

#### list

*Required*  
Type: `array`

List to pick from.

#### options.count

Type: `number`  
Default: `1`

Number of picks.

Must be lower or equal to the length of `list`.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
