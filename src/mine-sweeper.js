const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix ) {
  if (matrix.length !== matrix[0].length) {

    for (i = 0; i < matrix.length; i++) {
      for (j = 0 ; j < matrix[0].length; j++) {
        if (typeof(matrix[i][j]) !== 'number') {
          matrix[i][j] = 0
        }
      }
    }
    return matrix
  }

  for (i = 0; i < matrix.length - 1; i++) {
    for (j = 1 ; j < matrix[0].length - 1; j++) {
      console.log(matrix[i][i] === matrix[i + 1][i + 1])
      if (matrix[i][i] === matrix[i + 1][i + 1] && matrix[i][j] === matrix[i + 1][j - 1]) {
        matrix[i][j] = 2 
        matrix[i + 1][j - 1] = 2
        break
      }
    }
  }
  for (i = 0; i < matrix.length; i++) {
    for (j = 0 ; j < matrix[0].length; j++) {
      if (typeof(matrix[i][j]) !== 'number') {
        matrix[i][j] = 1
      }
    }
  }
  return matrix
}

module.exports = {
  minesweeper
};
