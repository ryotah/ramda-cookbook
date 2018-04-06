const R = require('ramda');

/**
 * Set properties only if they don't exist
 * https://github.com/ramda/ramda/wiki/Cookbook#set-properties-only-if-they-dont-exist
 *
 * defaults :: Object -> Object -> Object
 */
const defaults = R.flip(R.merge);

console.log(
  defaults(
    { foo: 'bar' },
    {
      SECRET: 'deadbeef',
    }
  )
);
console.log(
  defaults(
    { foo: 'bar', SECRET: '' },
    {
      SECRET: 'deadbeef',
    }
  )
);
// => {"SECRET":"deadbeef","foo":"bar"}
// => {"SECRET":"","foo":"bar"}

module.exports = defaults;

// flip
// ((a, b, c, …) → z) → (b → a → c → … → z)
// http://ramdajs.com/docs/#flip
