const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let counter = 0;

  for (i = 0; i<String(n).length; i++) {
    let c = String(n).split('').filter((a, index) => index!=i).join('')
    counter < +c ? counter = +c : ''
  }
  return counter
}

module.exports = {
  deleteDigit
};
