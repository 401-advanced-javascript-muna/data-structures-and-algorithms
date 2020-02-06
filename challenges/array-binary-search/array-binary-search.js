// eslint-disable-next-line strict
'use strict';

let searchbinary = module.exports = {};

searchbinary.binarySearch = (arr, searchKey) => {
  let L = 0;
  let R = arr.length - 1;

  do {
    let middle = Math.floor(arr.length / 2);
    if (arr[middle] < searchKey) { L = middle + 1; }

    else if (arr[middle] > searchKey) { R = middle - 1; }

    else { return middle; }

  }
  while (L <= R);

  return -1;

};
console.log('hi');