'use strict';
//Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
class Node {
  constructor(element){
    this.element = element;
    this.head = head;
    this.next = null;}
  insert(data){
    let newNode = new Node(data);//  newNode is object 
    newNode.next = this.head; // both (head and next)pointers point at the same node. 
    this.head = newNode;// As we are inserting at the beginning the head pointer needs to now point at the newNode. 
    return this.head;
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
