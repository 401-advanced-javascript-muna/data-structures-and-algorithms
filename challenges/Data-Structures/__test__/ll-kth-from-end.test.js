
const LL = require('../lib/ll-kth-from-end');


describe('Linked List Module',()=>{
  it('llkthFromEnd(k):Can properly return the node’s value that is k from the end of the linked list.  ', () => {
    // head -> [1] -> [3] -> [8] -> [2] -> X	k=0	 output=2
    let list = new LL();
    list.insert('1');
    list.insert('3');
    list.insert('8');
    list.insert('2');

    expect(list.llkthFromEnd(0)).toEqual('2');
    expect(list.llkthFromEnd(2)).toEqual('3');
    expect(list.llkthFromEnd(6)).toEqual('Exception');

  });
});