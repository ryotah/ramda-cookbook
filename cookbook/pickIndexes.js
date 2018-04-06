const R = require('ramda');

/**
 * :: [Number] -> [a] -> [a]
 * Pick values a from list by indexes
 * https://github.com/ramda/ramda/wiki/Cookbook#pick-values-a-from-list-by-indexes
 */
const pickIndexes = R.compose(R.values, R.pickAll);

// console.log(pickIndexes([0, 2], ['a', 'b', 'c']));
// => ['a', 'c']

module.exports = pickIndexes;

// pickAll
// http://ramdajs.com/docs/#pickAll

// rubyの場合
// arr = ['a', 'b', 'c']
// arr.values_at(0, 2)

// R.propsでも可能（と思うぞ）
// R.props([0, 2], ['a', 'b', 'c']);
// => ['a', 'c']
