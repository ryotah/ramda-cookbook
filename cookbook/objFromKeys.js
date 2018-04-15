const R = require('ramda');

/**
 * Make an object out of keys, with values derived from them
 * https://github.com/ramda/ramda/wiki/Cookbook#make-an-object-out-of-keys-with-values-derived-from-them
 *
 * objFromKeys :: (String -> a) -> [String] -> {String: a}
 */
const objFromKeys = R.curry((fn, keys) => R.zipObj(keys, R.map(fn, keys)));

const files = ['diary.txt', 'shopping.txt'];
objFromKeys(read, files);
// => { 'diary.txt': 'diary.txt's content', 'shopping.txt': 'shopping.txt's content' }

module.exports = objFromKeys;

// zipObj List
// [String] → [*] → {String: *}
// http://ramdajs.com/docs/#zipObj
//
// R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}

function read(file) {
  return `${file}'s content`;
}
// objFromKeys(fs.readFileSync, files);
// => { 'diary.txt': 'Dear diary...', ... }
