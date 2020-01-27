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
        list.insertBefore('2','test');
        expect(LL.toString()).toMatch("1 -> test -> 2 -> 3 -> NULL")
    });
    it('insertAfter():Can properly insert before a value', () => {  
        let list = new LL();
        list.append('1');
        list.append('2');
        list.append('3');
        list.insertAefore('2','test')
        expect(LL.toString()).toMatch("1 -> 2 -> test -> 3 -> NULL")
    });
});
