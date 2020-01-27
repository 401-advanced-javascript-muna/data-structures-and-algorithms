'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.size=0;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
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
  insertBefore(value, newVal){
    let currentNode;
    let previousNode;

    // empty
    if (!this.head) {
        this.head = new Node(newVal);
    }

    let newNode = new Node(newVal);
    currentNode = this.head;//start from head
    while (currentNode.value !== value) { //keep searching 
        previousNode = currentNode;
        currentNode = currentNode.next;
    }
    newNode.next = currentNode;
    previousNode.next = newNode;

    this.size++;

    }
 
  insertAfter(value, newVal){
    let currentNode;
    let previousNode;

    // empty
    if (!this.head) {
        this.head = new Node(newVal);
    }

    let newNode = new Node(newVal);
    currentNode = this.head;//start from head
    while (currentNode.value !== value) { //keep searching 
        previousNode = currentNode;
        currentNode = currentNode.next;
    }
    newNode.next =newNode ;
    previousNode.next =currentNode ;

    this.size++;

  } };
module.exports=LinkedList;