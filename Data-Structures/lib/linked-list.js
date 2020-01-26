'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
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
  }
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
    }}
  toString()  {
    let currentNode = this.head;
    let allNodeString = '';
    while (currentNode) {
      allNodeString += ` ${currentNode.value} ->`;
      currentNode = currentNode.next;
    }
    console.log('hhhhhh',allNodeString += ` NULL`);
    return allNodeString += ` NULL`;
    // "{ a } -> { b } -> { c } -> NULL"
  }
}

module.exports = LinkedList;

