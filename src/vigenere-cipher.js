const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw Error("Incorrect arguments!");
    }

    let result = [], l = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();
    
    for (let element of message) {
      if (element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 90) {
        element = String.fromCharCode((element.charCodeAt(0) - 65 + key[l++ % key.length].charCodeAt(0) - 65) % 26 + 65);
      }

      result.push(element);
    }
    return (this.isDirect ? result : result.reverse()).join("");
  }

  decrypt(message, key) {
  if (!message || !key) throw Error("Incorrect arguments!");
    let result = [], l = 0;


    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let element of message) {
      if (element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 90) {
        element = String.fromCharCode((element.charCodeAt(0) + 65 - key[l++ % key.length].charCodeAt(0) + 65) % 26 + 65);
      }

      result.push(element);
    }
    return (this.isDirect ? result : result.reverse()).join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
