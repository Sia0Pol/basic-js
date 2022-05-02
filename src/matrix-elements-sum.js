const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {
  let summOfEl = 0;

  for(i = 0; i < matrix[0].length; i++) {
    for(j = 0; j < matrix.length; j++) {
      let elements = matrix[j][i];
      if(elements !== 0) {
        summOfEl += elements;
      } else {
        break;
      }
    }
  }

  return summOfEl;
}

module.exports = {
  getMatrixElementsSum
};
