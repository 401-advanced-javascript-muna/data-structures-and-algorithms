'use strict';

const Node = require('./linked-list');

class LinkedList {
  constructor() {
    this.head = null;
  }

insert(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;
  };
  includes(value){
    let node = new Node(value);

    let currentNode = this.head;    //Initialize current
    while (currentNode !== null)
    {
    if (currentNode.value === value) {
    currentNode = currentNode.next;
    return true;    //data found
    }
    return false;
}};
  toString(){
    // "{ a } -> { b } -> { c } -> NULL"
    let node = new Node(value);
  


  };
}
module.exports = LinkedList;