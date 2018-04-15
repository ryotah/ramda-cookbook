const R = require('ramda');

const overlaps = R.pipe(R.intersection, R.complement(R.isEmpty));
process.argv; // ['node', 'script.js', '-v']
overlaps(['-v', '--verbose'], process.argv); // true

/**
 * Problem: Do any of these strings appear in another list?
 * https://github.com/ramda/ramda/wiki/Cookbook#problem-do-any-of-these-strings-appear-in-another-list
 *
 * overlaps :: [a] -> [a] -> Boolean
 */
const overlaps = R.pipe(R.intersection, R.complement(R.isEmpty));

// process.argv // ['node', 'script.js', '-v']
const argv = ['node', 'script.js', '-v'];
overlaps(['-v', '--verbose'], argv);
// => true

module.exports = overlaps;

// intersection
// [*] → [*] → [*]
// http://ramdajs.com/docs/#intersection
//
// R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]

// complement Logic
// (*… → *) → (*… → Boolean)
// http://ramdajs.com/docs/#complement
//
// var isNotNil = R.complement(R.isNil);
// isNil(null); //=> true
// isNotNil(null); //=> false
//
// https://eow.alc.co.jp/search?q=complement
// 《数学》補集合、補数
