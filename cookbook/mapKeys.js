const R = require('ramda');

/**
 * Map keys of an object
 * https://github.com/ramda/ramda/wiki/Cookbook#map-keys-of-an-object
 *
 * mapKeys :: (String -> String) -> Object -> Object
 */
const mapKeys = R.curry((fn, obj) =>
  R.fromPairs(R.map(R.adjust(fn, 0), R.toPairs(obj)))
);

mapKeys(R.toUpper, { a: 1, b: 2, c: 3 }); // { A: 1, B: 2, C: 3 }

module.exports = mapKeys;

// adjust List
// (a → a) → Number → [a] → [a]
// http://ramdajs.com/docs/#adjust
//
// R.adjust(R.add(10), 1, [1, 2, 3]);
// => [1, 12, 3]
// R.adjust(R.add(10))(1)([1, 2, 3]);
// => [1, 12, 3]

// fromPairs List
// [[k,v]] → {k: v}
// http://ramdajs.com/docs/#fromPairs

// toPairs Object
// {String: *} → [[String,*]]
// http://ramdajs.com/docs/#toPairs

// 最初の案
// R.pipe(R.toPairs, R.map(pair => [R.toUpper(pair[0]), pair[1]]), R.fromPairs)(a);
//
// pipeをやめた案
// const mapKeys = (obj) =>
//   R.fromPairs(R.map(pair => [R.toUpper(pair[0]), pair[1]], R.toPairs(obj)));
