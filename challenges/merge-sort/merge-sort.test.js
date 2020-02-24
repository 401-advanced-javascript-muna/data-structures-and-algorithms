'use strict ';

const mergeSort = require('./merge-sort.js');

describe('Merge  sort', ()=> {

  it('Return sorted array', () => {
    let arr = [8,4,23,42,16,15];
    let soredArr = [4,8,15,16,23,42];
    expect(mergeSort(arr)).toEqual(soredArr);
  });
});