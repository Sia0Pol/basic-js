const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodeL = "";

  for (i = 0; i < str.split("").length; i++) {
    let count = 1, stringg = str[i];

    while (stringg === str[i + 1]) {
      count++;
      i++;
    }
    count > 1 ? (encodeL += count + stringg) : (encodeL += stringg);
  }
  return encodeL;
}

module.exports = {
  encodeLine
};
