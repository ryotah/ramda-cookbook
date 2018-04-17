const R = require('ramda');

/**
 * Get object size
 * https://github.com/ramda/ramda/wiki/Cookbook#get-object-size
 */
const objSize = R.nAry(
  1,
  R.pipe(
    R.when(R.is(Object), R.keys),
    R.when(
      R.is(Boolean),
      R.cond([[R.equals(false), R.always(null)], [R.T, R.always(1)]])
    ),
    R.when(R.is(Number), R.toString),
    R.ifElse(R.isNil, R.always(0), R.length)
  )
);

module.exports = objSize;

// when Logic
// (a → Boolean) → (a → a) → a → a
// http://ramdajs.com/docs/#when

// ifElse Logic
// (*… → Boolean) → (*… → *) → (*… → *) → (*… → *)
// http://ramdajs.com/docs/#ifElse

// cond Logic
// [[(*… → Boolean),(*… → *)]] → (*… → *)
// http://ramdajs.com/docs/#cond
// var fn = R.cond([
//   [R.equals(0),   R.always('water freezes at 0°C')],
//   [R.equals(100), R.always('water boils at 100°C')],
//   [R.T,           temp => 'nothing special happens at ' + temp + '°C']
// ]);
