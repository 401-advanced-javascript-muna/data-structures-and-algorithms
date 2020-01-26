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
  insertBefore(value, newVal){
    let node = new Node(newVal);
    let currentNode = this.head;    //Initialize current
    while (currentNode){
        if(currentNode !== null)
    {
      if (currentNode.value === value) {
        currentNode= node;
        currentNode.next=value;
    }
      console.log(currentNode,currentNode.next,'kkkkkkkk')

  }}}}
//   insertAfter(value, newVal){

//   }
// };
module.exports=LinkedList;