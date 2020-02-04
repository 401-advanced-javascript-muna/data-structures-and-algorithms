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
      return null;
    }
    // if only one node in the list
    if(!this.head.next){
      let previous = this.head;
      this.head = null;
      return previous.value ;
    }else{
      let previous = this.head;
      let tail = this.head.next;

      while(tail.next !== null){
        previous = tail;
        tail = tail.next;
      }

      previous.next = null;
      this.size--;
      return tail.value;
    }

  }

}

class AnimalShelter {
  constructor() {
    this.queuestorage = New LinkedList();
    this.front = this.queuestorage.head;
    this.rear = null;
    this.size = LinkedList.size;
  }

  enqueue(animal) {
    // if (animal === 'dog' || 'cat') {

    let ele = this.storage.insert(animal);
    this.size++;
    if(ele.size === 1){
      this.front = item;
      this.rear = item;

    }else{
      this.rear = item;
    }
  // }
  //  else {
  //   return ;
  // }
  }

  dequeue(pref) {
  if (animal === 'dog' || 'cat') {return pref;}
  else{return null;}

  
  }
}