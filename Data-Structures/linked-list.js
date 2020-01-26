'use strict';
//Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
class Node {
  constructor(){
    this.head = head;
  }
  insert(data){
    let newNode = new Node(data);//  newNode is object

    if (!this.head) {// As we are inserting at the beginning the head pointer needs to now point at the newNode.
      this.head = newNode;
    }
    
    let currentNode = this.head;
    while(currentNode.next) {//if there is a next value
      currentNode = currentNode.next
    }

    currentNode.next = newNode;
    return this;
  }
  };
  includes(val){

    let currentNode = this.head;
    if (currentNode === val) {return true; }

    while(currentNode.next) {
      if (currentNode === val) {return true; }
    };
    return false;

  };
  toString(){
    // "{ a } -> { b } -> { c } -> NULL"
  };
}

module.exports = Node;
