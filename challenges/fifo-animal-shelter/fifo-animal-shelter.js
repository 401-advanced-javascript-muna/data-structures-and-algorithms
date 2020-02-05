

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
    this.storage = new LinkedList();
    this.front = this.storage.head;
    this.rear = null;
    this.size = LinkedList.size;
  }

  enqueue(animal) {
    if (animal === 'dog' || animal === 'cat') {

      let ele = this.storage.insert(animal);
      this.size++;
      if(ele.size === 1){
        this.front = animal;
        this.rear = animal;

      }else{
        this.rear = animal;
      }
    }
    else {
      return null;
    }
  }

  dequeue(pref) {

    if (!this.storage.head){
      return null;
    }
    if (pref === 'dog' ||  pref === 'cat') {

      let ptr = this.storage.head.value;
      this.front = this.storage.head.next.value;
      this.storage.size--;
      return ptr;


    }
    else{return null;}


  }
}
module.exports = {AnimalShelter,LinkedList};

// module.exports=AnimalShelter;