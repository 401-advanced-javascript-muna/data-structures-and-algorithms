'use strict';
// module.exports =fibonacciSequenceArray;
let fibonacciSequence = module.exports = {};
fibonacciSequence.fibonacciSequenceArray=(n)=> {

let array = [0,1] ;

for (let i=2 ; i<=n; i++ ){
  array.push(array[i-1]+ array[i-2]) ;

}
return array;

}

