const R = require('ramda');

/**
 * Get object by id
 * https://github.com/ramda/ramda/wiki/Cookbook#get-object-by-id
 *
 * findById :: String -> Array -> Object
 */
const findById = R.converge(R.find, [
  R.pipe(R.nthArg(0), R.propEq('id')),
  R.nthArg(1),
]);

module.exports = findById;

// converge Function
// ((x1, x2, …) → z) → [((a, b, …) → x1), ((a, b, …) → x2), …] → (a → b → … → z)
// http://ramdajs.com/docs/#converge
//
// 収束する
//
// var average = R.converge(R.divide, [R.sum, R.length])
// average([1, 2, 3, 4, 5, 6, 7]) //=> 4

// nthArg Function
// Number → *… → *
// http://ramdajs.com/docs/#nthArg
//
// R.nthArg(1)('a', 'b', 'c'); //=> 'b'
// R.nthArg(-1)('a', 'b', 'c'); //=> 'c'

// 最初の案
// const findById = (id) => {
//   return R.find(R.propEq('id', id));
// }
