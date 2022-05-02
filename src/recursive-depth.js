const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    if (Array.isArray(arr)) {
      let finalResult = []

      for (i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          console.log(arr[i])
          let newArray = [...arr[i]]
          finalResult.push(newArray)
        }
      }
      if (finalResult.length !== 0) {
        return counter + this.calculateDepth(finalResult.flat())
      }
    } 
    return counter
  }
}

module.exports = {
  DepthCalculator
};
