'use strict'
function insertShiftArray(arr, val) {
    let middle = Math.ceil(arr.length / 2);
    let newArray = [];


    for (let i = 0; i <= arr.length; ++i) {
        if (i < middle){newArray[i] = arr[i]; }

        if (i === middle){newArray[i] = val;}

        if (i > middle){newArray[i] = arr[i - 1];}
    }
    return newArray;
}
