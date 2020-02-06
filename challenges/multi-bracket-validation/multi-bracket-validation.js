// /* eslint-disable strict */
// 'use strict';

const { Stack } = require('../stacks-and-queues');


function multiBracketValidation(input) {
  let stack = new Stack;
  let brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  if (typeof input !== 'string') {
    return undefined;
  }

  for (let i = 0; i < input.length; i++) {
    let char = input.charAt(i);
    if (brackets[char]) {
      stack.push(brackets[char]);
    } else {
      let last = stack.pop();
      if (input[char] !== brackets[last]) {
        return false;
      }
    }
  }
  if (stack.isEmpty()) {
    return true;
  } else {
    return false;
  }
}


// const multiBracketValidation = function (input){
//   if (typeof input !== 'string'){return 'the input should be a string';}
//   else{ 
// if input.includes('[',']','{','}','(',')'){
//     let squareBracket= (input.includes('[')&&input.includes(']'));
//     let roundBracket= (input.includes('(')&&input.includes(')'));
//     let curlyBracket= (input.includes('{')&&input.includes('}'));


  
//   }
// };

// console.log(multiBracketValidation('['));


// // module.exports = multiBracketValidation;