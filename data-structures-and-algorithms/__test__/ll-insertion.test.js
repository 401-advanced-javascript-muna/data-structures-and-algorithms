'use strict';
const LL= require('../lib/ll-insertion');

describe('Linked List Module', () => {

    it('append():Can properly insert into the linked list', () => {  //Can properly insert into the linked list
        let list = new LL();
        list.append('initialValue');
        expect(list.head.value).toEqual('initialValue');
        list.append('secondtest');
        expect(list.head.value).toEqual('initialValue');//The head property will properly point to the first node in the linked list
    });
    it('insertBefore():Can properly insert before a value', () => {  //Can properly insert into the linked list
        let list = new LL();
        list.append('1');
        list.append('2');
        list.append('3');
        list.insertBefore(2,'test')
        // expect(list).toEqual('initialValue');//The head property will properly point to the first node in the linked list
    });
});
