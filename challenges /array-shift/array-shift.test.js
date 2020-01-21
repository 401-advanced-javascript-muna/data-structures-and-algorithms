const  insertShiftArray = require('./array-shift.js');

describe('I want to insert a value in the middle of an array (array.length is odd number)', ()=>{
    it(' insert a value in the middle of an array',()=>{
        insertShiftArray([4, 8, 15, 23, 42], 16)
        expect(insertShiftArray[3]).toEqual(16)
    })
})

describe('I want to insert a value in the middle of an array (array.length is even number)', ()=>{
    it(' insert a value in the middle of an array',()=>{
        insertShiftArray([2, 4, 6, 8], 5);
        expect(insertShiftArray[2]).toEqual(16)
    })
})


