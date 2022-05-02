const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let array = {};

  for (i = 0; i < domains.length; i++) {
    let result = '', dom = [];
    dom = domains[i].split('.').reverse();

    for (j = 0; j < dom.length; j++) {
      result += `.${dom[j]}`;
      (array[result] ? array[result]++ : array[result] = 1)
    }
  }
  return array;
}

module.exports = {
  getDNSStats
};
