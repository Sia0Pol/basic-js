const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  newArr = [];
  rep = options.repeatTimes || 1;

  for (let i = 1; i <= rep; i++) {
    let addArr = [];
    if (options.additionRepeatTimes) {
      for (let j = 1; j <= options.additionRepeatTimes; j++) {
        addArr.push(String(options.addition));
      }
    }
    if (options.addition && !options.additionRepeatTimes) {
      addArr.push(String(options.addition));
    }

    newArr.push(str + addArr.join(options.additionSeparator || "|"));
  }
  return newArr.join(options.separator || "+");
}

module.exports = {
  repeater
};
