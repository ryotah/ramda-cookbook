const R = require('ramda');

/**
 * Rename keys of an object
 * https://github.com/ramda/ramda/wiki/Cookbook#rename-keys-of-an-object
 *
 * {a: b} -> {a: *} -> {b: *}
 */
const renameKeys = R.curry((keysMap, obj) =>
  R.reduce(
    (acc, key) => R.assoc(keysMap[key] || key, obj[key], acc),
    {},
    R.keys(obj)
  )
);

const input = { firstName: 'Elisia', age: 22, type: 'human' };
renameKeys({ firstName: 'name', type: 'kind', foo: 'bar' })(input);
//=> { name: 'Elisia', age: 22, kind: 'human' }

module.exports = renameKeys;

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
// const renameKeys = R.curry((keysMap, obj) =>
//   R.fromPairs(
//     R.map(
//       v => (R.prop(v[0], keysMap) ? [R.prop(v[0], keysMap), v[1]] : v),
//       R.toPairs(obj)
//     )
//   )
// );
