/* eslint-disable no-undef */
'use strict';

// const LL = require('./ll-merge.js');
const LL = require('./ll-merge');
let resultList;
// beforeEach(
//     resultList = new LL()
// )
describe('Linked List Module', () => {


  it('llMerge():', () => {
    resultList = new LL();

    let list1 = new LL();
    list1.insert(1); //'1 -> 2 -> 3 -> NULL'
    list1.insert(2);  //'4 -> 5 -> 6 -> NULL'
    list1.insert(3);

    let list2 = new LL();
    list2.insert(4);
    list2.insert(5);
    list2.insert(6);
    let theMerge = resultList.llMerge(list1, list2);
    expect(theMerge.toString()).toMatch('1 -> 4 -> 2 -> 5 -> 3 -> 6 -> NULL');


  });

});