const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],


 getLength() {
   this.arr.length
   return this
  },

 addLink(value) {
   this.arr.push(`( ${value} )~~`)
   return this
  }, 

 removeLink(position) {
   if (position % 1 !== 0 || position - 1 < 0 || position > this.arr.length) {
     this.arr = [];
     throw new Error ('You can\'t remove incorrect link!');
   }

   this.arr.splice(position - 1, 1)
   return this
  },


 reverseChain() {
   this.arr.reverse()
   return this
  },


 finishChain() {
   let str = this.arr.join('')
   this.arr = []
   return str.slice(0, str.length - 2)
  }
};

module.exports = {
  chainMaker
};
