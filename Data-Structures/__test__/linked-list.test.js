/* eslint-disable no-unused-expressions */



const LL = require('../lib/linked-list');

// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
// Can properly return a collection of all the values that exist in the linked list


describe('Linked List Module', () => {

  it(' Can successfully instantiate an empty linked list', () => {
    let list = new LL();
    expect(list.head).toBeNull();  //empty
  });

  it('The head property will properly point to the first node in the linked list', () => {  //Can properly insert into the linked list
    let list = new LL();
    let initialValue = 'firsttest';
    list.insert(initialValue);
    expect(list.head.value).toEqual(initialValue);

  });
  it('Can properly insert multiple nodes into the linked list', () => {  //Can properly insert into the linked list
    let list = new LL();
    let initialValue = 'firsttest';
    list.insert(initialValue);
    let nextValue = 'secondtest';
    list.insert(nextValue);
    expect(list.head.value).toEqual(initialValue);//The head property will properly point to the first node in the linked list

  });

  it('Will return true when finding a value within the linked list that exists',()=>{
    let list = new LL();
    let initValue = 'a';
    list.insert(initValue);
    let secValue = 'b';
    list.insert(secValue);
    expect(list.includes('b')).ToBeTruthy;
  });
  it(' Will return false when searching for a value in the linked list that does not exist',()=>{
    let list = new LL();
    let initValue = 'a';
    list.insert(initValue);
    let secValue = 'b';
    list.insert(secValue);
    expect(list.includes('d')).ToBeFalsy;
  });
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let list = new LL();
    list.insert('a'); /// this is the first node in the linked list
    list.insert('b');
    list.insert('c');
    expect(list.toString()).toMatch('a -> b -> c -> NULL');
  });
});