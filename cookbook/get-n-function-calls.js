const R = require('ramda');

/**
 * list :: a... -> [a...]
 * Get n function calls as a list
 * https://github.com/ramda/ramda/wiki/Cookbook#get-n-function-calls-as-a-list
 */
function a1() {
  return 'a1';
}
function a2() {
  return 'a2';
}
function a3() {
  return 'a3';
}
const arr = [a1, a2, a3];

console.log(R.map(R.call, arr));
// => ['a1', 'a2', 'a3']

console.log(R.map(R.call, R.repeat(Math.random, 5)));
/* => [
  0.6798616560032562,
  0.0540909709429529,
  0.054405830425946045,
  0.36315702008399087,
  0.19031666231510402
] */

// repeat
// a → n → [a]
// http://ramdajs.com/docs/#repeat
// R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
