const R = require('ramda');

/**
 * Derivative of R.props for deep fields
 * https://github.com/ramda/ramda/wiki/Cookbook#derivative-of-rprops-for-deep-fields
 */
const dotPath = R.useWith(R.path, [R.split('.')]);
// const dotPath = R.pipe(R.split('.'), R.path) // => こっちでも可能
const propsDotPath = R.useWith(R.ap, [R.map(dotPath), R.of]);
const obj = {
  a: { b: { c: 1 } },
  x: 2,
};
console.log(propsDotPath(['a.b.c', 'x'], obj));
// => [ 1, 2 ]

// propsDotPathを分解すると以下のようになる
// 1. useWithを展開
R.ap(R.map(dotPath)(['a.b.c', 'x']), [obj]);
// 2. mapを展開
R.ap([dotPath('a.b.c'), dotPath('x')], [obj]);

module.exports.dotPath = dotPath;
module.exports.propsDotPath = propsDotPath;

// props
//
// http://ramdajs.com/docs/#props

// useWith
// ((x1, x2, …) → z) → [(a → x1), (b → x2), …] → (a → b → … → z)
// http://ramdajs.com/docs/#useWith

// ap
// [a → b] → [a] → [b]
// Apply f => f (a → b) → f a → f b
// (a → b → c) → (a → b) → (a → c)
// http://ramdajs.com/docs/#ap
//

// of
// a → [a]
// http://ramdajs.com/docs/#of
