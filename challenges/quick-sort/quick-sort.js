'use strict ';

// modified from https://medium.com/karuna-sehgal/a-quick-explanation-of-quick-sort-7d8e2563629b
function quickSort(arr){
  if (arr.length === 0) return [];

  var left = [], right = [], pivot = arr[0];

  for (var i = 1; i < arr.length; i++) {

    if(arr[i] < pivot){
      left.push(arr[i]);
      console.log('left',left);}
    else{
      right.push(arr[i]);
      console.log('right',right);

    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}



module.exports = quickSort;