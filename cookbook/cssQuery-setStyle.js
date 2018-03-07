const R = require('ramda');

/**
 * Mess with the DOM
 * https://github.com/ramda/ramda/wiki/Cookbook#mess-with-the-dom
 */

/**
 * cssQuery :: String -> Node -> NodeList
 * Get all descendants that match selector
 */
const cssQuery = R.invoker(1, 'querySelectorAll');
// curryを利用すると以下のようになる（呼び出し元を実行時に指定できない）
// const querySelectorAll = document.querySelectorAll.bind(document)
// const cssQuery = R.curry(querySelectorAll);

/**
 * setStyle :: String -> String -> Element -> Element
 * Mutate style properties on an element
 */
const setStyle = R.assoc('style');

// Make all paragraphs and anchors red
R.pipe(cssQuery('a, p'), R.map(setStyle({ color: 'red' })))(document);

module.exports.cssQuery = cssQuery;
module.exports.setStyle = setStyle;

// invoker
// Number → String → (a → b → … → n → Object → *)
// http://ramdajs.com/docs/#invoker
// var sliceFrom = R.invoker(1, 'slice');
// sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
// var sliceFrom6 = R.invoker(2, 'slice')(6);
// sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'

// assoc
// String → a → {k: v} → {k: v}
// http://ramdajs.com/docs/#assoc
// R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}

// mess
// https://eow.alc.co.jp/search?q=mess&ref=sa

// assoc => associate
// https://eow.alc.co.jp/search?q=associate

// invoker
// https://eow.alc.co.jp/search?q=invoker&ref=sa
