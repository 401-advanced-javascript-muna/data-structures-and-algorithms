/* eslint-disable strict */
'use strict';
const LL = require('../lib/ll-kth-from-end');


describe('Linked List Module',()=>{
  it('llkthFromEnd(k):Where k is greater than the length of the linked list  ', () => {
    // head -> [1] -> [3] -> [8] -> [2] -> X
    let list = new LL();
    list.insert('1');
    list.insert('3');
    list.insert('8');
    list.insert('2');
    expect(list.llkthFromEnd(6)).toEqual('Exception');

  });
  it('llkthFromEnd(k):Where k and the length of the list are the same  ', () => {
    // head -> [1] -> [3] -> [8] -> [2] -> X
    let list = new LL();
    list.insert('1');
    list.insert('3');
    list.insert('8');
    list.insert('2');

    expect(list.llkthFromEnd(4)).toEqual('Exception');

  });
  it('llkthFromEnd(k):Where k is not a positive integer  ', () => {
    // head -> [1] -> [3] -> [8] -> [2] -> X
    let list = new LL();
    list.insert('1');
    list.insert('3');
    list.insert('8');
    list.insert('2');

    expect(list.llkthFromEnd(-1)).toEqual('Exception');

  });
  it('llkthFromEnd(k):Where the linked list is of a size 1', () => {
    // head -> [1]  -> X	k=0
    let list = new LL();
    list.insert('1');


    expect(list.llkthFromEnd(0)).toEqual('1');


  });

  it('llkthFromEnd(k):“Happy Path” where k is not at the end, but somewhere in the middle of the linked list  ', () => {
    // head -> [1] -> [3] -> [8] -> [2] -> X	k=3	 output=2
    let list = new LL();
    list.insert('1');
    list.insert('3');
    list.insert('8');
    list.insert('2');

    expect(list.llkthFromEnd(3)).toEqual('1');

  });
});



