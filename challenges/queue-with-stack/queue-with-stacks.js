

class Node{
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

class Stack{
  constructor(top = null){
    this.top = top;
  }

  push(value){
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop(){
    if(!this.top) {return null;}
    else{
      let node = this.top;
      this.top = node.next;
      return node.value;
    }

  }

  peek(){
    if (!this.top){return null;}
    else{return this.top.value;}
  }

  isEmpty(){
    if(this.top) return false;

    if(!this.top) return true;
  }

}

class PseudoQueue {
  constructor(){
    this.stack = new Stack();
  }

  enqueue(value){
    this.stack.push(value);
  }

  dequeue(){
  }
}
module.exports = {   PseudoQueue };