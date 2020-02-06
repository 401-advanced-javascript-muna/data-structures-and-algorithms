/* eslint-disable strict */
'use strict';
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0;

  }

  insert(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.size++;
      return this;
    }

    let currentNode = this.head;
    while(currentNode.next) {

      currentNode = currentNode.next;

    }
    currentNode.next = node;
    this.size++;


    return this;

  }

  llkthFromEnd(k){
    let currentNode = this.head;
    // console.log(currentNode,'***********');
    if(k < 0){return 'Exception'; }
    if(this.size <= k){return 'Exception';}
    if(this.size > k){
      for(let i = 0;i < this.size - k - 1;i++){

        currentNode = currentNode.next;
        // console.log(currentNode.value,'***********');

      }
      // console.log(currentNode.value,'********************************');

      return currentNode.value;
    }


  }
}
// let list = new LinkedList();
// list.insert('1');
// list.insert('3');
// list.insert('8');
// list.insert('2');
// // let newone = list.insert();
// console.log(list);
// console.log(list.llkthFromEnd(0));
module.exports = LinkedList;