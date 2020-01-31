'use strict';

const LL = require('./reverseSLL');
let resultList;

describe('Linked List Module', () => {

  it('reverseSLL(): if the input is an empty LL should return can not reverse the linked list is empty  ', () => {
    resultList = new LL();

    let list = new LL();
    let reverse = resultList.reverseSLL(list);
    expect(reverse.toString()).toMatch('can not reverse the linked list is empty');
  });
  it('reverseSLL(): return revesre linked list ', () => {
    resultList = new LL();
    let list1 = new LL();
    list1.insert(1); //'1 -> 2 -> 3 -> 4 -> NULL'
    list1.insert(2);
    list1.insert(3);
    list1.insert(4);
    let reverse = resultList.reverseSLL(list1);
    expect(reverse.toString()).toMatch('4 -> 3 -> 2 -> 1 -> NULL');
  });

});