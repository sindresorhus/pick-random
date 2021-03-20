/**
 * Pick random items from a list
 * 
 * @example
 * ```
 * import pickRandom from 'pick-random'
 * 
 * pickRandom(['Sindre', 'Stephen', 'Unicorn', 'Pascal', 'Addy', 'Pony']);
 * // => ['Unicorn']
 * 
 * pickRandom(['Sindre', 'Stephen', 'Unicorn', 'Pascal', 'Addy', 'Pony'], {count: 2});
 * // => ['Unicorn', 'Pony']
 * ```
 */
declare const pickRandom: <T>(data: T[], opts?: { count?: number }) => T[]

export = pickRandom 
