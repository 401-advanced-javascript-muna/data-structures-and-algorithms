// eslint-disable-next-line strict
'use strict';

const  searchbin = require('./array-binary-search.js');

describe('search binary', ()=>{
  it('if search key is in an array should return the index',()=>{
    let arr = [4, 8, 15, 23, 42];
    let key = 8;
    expect(searchbin.binarySearch(arr,key)).toEqual(1);
  });
});


// describe('search binary', ()=>{
//     it('if search key is not in an array should return -1',()=>{
//         let arr = [11,22,33,44,55,66,77];
//         let key = 99;
//         expect(searchbin.binary_search(arr,key)).toEqual(-1);
//     });
// });