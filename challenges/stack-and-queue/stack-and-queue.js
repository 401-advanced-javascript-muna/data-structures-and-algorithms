
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
    this.top = item;
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


class Queue {
  constructor(){
    this.storage = new LinkedList();
    this.front = null;
    this.rear = null;
    this.size = LinkedList.size;
  }

  enqueue(item){
    let ele = this.storage.insert(item);
    // console.log('kkkkkkkkkkk',ele.size);
    this.size++;
    if(ele.size === 1){
      this.front = item;
      this.rear = item;

    }
    else{
      this.rear = item;
    }
  }

  dequeue(){
    if( this.storage.size === 0){
      this.front = null;
      this.rear = null;
      return null;
    }else{
      let ptr = this.storage.head.value;
      this.front = this.storage.head.next.value;
      this.storage.size--;
      return ptr;
    }


  }
  peek(){
    return this.front;
  }

  isEmpty(){
    if(this.front === null && this.rear === null)  {
      return false;
    }
    else {return true;}

  }
}


module.exports = {Stack,Queue};