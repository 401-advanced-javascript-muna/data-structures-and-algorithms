const  fibo = require('./index.js');

describe('', ()=>{
  it(' insert a number ',()=>{


    expect(fibo.fibonacciSequenceArray(5)).toEqual([ 0, 1, 1, 2, 3, 5 ]);
  });
});


