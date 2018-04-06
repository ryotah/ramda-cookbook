const R = require('ramda');

/**
 * Get an object's method names
 * https://github.com/ramda/ramda/wiki/Cookbook#get-an-objects-method-names
 *
 * methodNames :: Object -> [String]
 */
const methodNames = R.compose(R.keys, R.pickBy(R.is(Function)));

const obj = {
  foo: true,
  bar: function() {},
  baz: function() {},
};
methodNames(obj); // => ['bar', 'baz']

module.exports = methodNames;
