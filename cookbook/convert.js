const R = require('ramda');

/**
 * Convert object to array
 * https://github.com/ramda/ramda/wiki/Cookbook#convert-object-to-array
 *
 * convert :: {a} -> [{ word :: String, count :: a }]
 */
const convert = R.compose(
  R.map(R.zipObj(['word', 'count'])),
  R.toPairs
);

console.log(convert({ I: 2, it: 4, that: 1 }));
// => [{"count": 2, "word": "I"}, {"count": 4, "word": "it"}, {"count": 1, "word": "that"}]

module.exports = convert;
