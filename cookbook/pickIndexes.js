const R = require('ramda');

/**
 * :: [Number] -> [a] -> [a]
 * Pick values a from list by indexes
 * https://github.com/ramda/ramda/wiki/Cookbook#pick-values-a-from-list-by-indexes
 */
const pickIndexes = R.compose(R.values, R.pickAll);

// console.log(pickIndexes([0, 2], ['a', 'b', 'c']));
// => ['a', 'c']

// http://ramdajs.com/docs/#pickAll

module.exports = pickIndexes;
