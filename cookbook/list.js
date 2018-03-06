const R = require('ramda');

/**
 * list :: a... -> [a...]
 * Create a list function
 * https://github.com/ramda/ramda/wiki/Cookbook#create-a-list-function
 */
const list = R.unapply(R.identity);

// console.log(list(1, 2, 3));
// => [1, 2, 3]

module.exports = list;

// upapply
// ([*…] → a) → (*… → a)
// http://ramdajs.com/docs/#unapply
// R.unapply(JSON.stringify)(1, 2, 3);
// JSON.stringify([1, 2, 3]);
// => '[1,2,3]'
