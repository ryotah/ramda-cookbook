const R = require('ramda');

/**
 * Rename keys of an object by a function
 * https://github.com/ramda/ramda/wiki/Cookbook#rename-keys-of-an-object-by-a-function
 */

const renameBy = R.curry((fn, obj) =>
  R.pipe(R.toPairs, R.map(R.adjust(fn, 0)), R.fromPairs)(obj)
);

renameBy(R.concat('a'), { A: 1, B: 2, C: 3 });
// => { aA: 1, aB: 2, aC: 3 }

module.exports = renameBy;

// mapKeys と同じじゃないかなと思ったら同じだった
