


const LL = require('../lib/linked-list');


describe('Linked List Module', () => {

  it('constructor', () => {
    let list = new LL();
    expect(list.head).toBeNull();  //empty
  });

  it('insert():Can properly insert into the linked list', () => {  //Can properly insert into the linked list
    let list = new LL();
    let initialValue = 'firsttest';
    list.insert(initialValue);
    expect(list.head.value).toEqual(initialValue);
    let nextValue = 'secondtest';
    list.insert(nextValue);
    expect(list.head.value).toEqual(initialValue);//The head property will properly point to the first node in the linked list


    // console.log('My linked list', list);
  });
  it('includes():Can properly search into the linked list',()=>{
    let list = new LL();
    let initValue = 'a';
    list.insert(initValue);
    let secValue = 'b';
    list.insert(secValue);
    // console.log(list,'kkkkk',LL.list.includes('b'));
    expect(list.includes('b')).ToBeTruthy;
    expect(list.includes('d')).ToBeFalsy;
  });
  it('toString():Can properly show linked list as string', () => {
    let list = new LL();
    list.insert('a'); /// this is the first node in the linked list
    list.insert('b');
    list.insert('c');
    expect(list.toString()).toMatch('a -> b -> c -> NULL');
  });
});