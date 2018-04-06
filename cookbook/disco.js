const R = require('ramda');

function red(v) {
  console.log('red', v);
}
function green(v) {
  console.log('green', v);
}
function blue(v) {
  console.log('blue', v);
}

/**
 * Apply a list of functions in a specific order into a list of values
 * https://github.com/ramda/ramda/wiki/Cookbook#apply-a-list-of-functions-in-a-specific-order-into-a-list-of-values
 */
const disco = R.pipe(R.zipWith(R.call, [red, green, blue]), R.join(' '));
console.log(disco(['foo', 'bar', 'xyz']));
// => red foo
// => green bar
// => blue xyz

module.exports = disco;
