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
removeLastNode(){
    if(!this.head){
        Stack.top = null;
        return null;
      }
      // if only one node in the list
      if(!this.head.next){
        let previous = this.head;
        this.head = null;
      Stack.top = null;
        return previous.value ;
      }else{
        let previous = this.head;
        let tail = this.head.next;
  
        while(tail.next !== null){
          previous = tail;
          tail = tail.next;
        }
        console.log('logic fhfhf',tail.value);
        Stack.top = previous;
        previous.next = null;
        this.size--;
        return tail.value;
      }
  
    }
}
/********************   STACK  **********************/
class Stack{
  constructor(){
    this.storage = new LinkedList();
    this.top = null;
  }

  push(item){
    this.storage.insert(item);
    this.top = item;
  }

  pop(){
    let item = this.storage.removeLastNode();
    this.top=item;
    console.log('***************',item);
    console.log(this.top,'kkkkkkkkkkkkkkkkkk');
    
    // this.top = !this.storage.size ? null : 

        return item;
  }

  peek(){
    return this.top;
  }
  isEmpty(){
    if(this.top){return true;}
    else{return false;}
  }
}

/********************   QUEUE **********************/


module.exports = Stack;