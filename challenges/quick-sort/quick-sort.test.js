'use strict ';

const quickSort = require('./quick-sort.js');

describe('Quick sort', ()=> {

  it('Return sorted array', () => {
    let arr = [8,4,23,42,16,15];
    let soredArr = [4,8,15,16,23,42];
    expect(quickSort(arr)).toEqual(soredArr);
  });
});