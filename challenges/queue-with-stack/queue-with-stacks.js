
'use strict ';
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

}

class PseudoQueue    {
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value){
    this.stack1.push(value);
  }

  dequeue() {
    if(this.stack2.top) {
      return this.stack2.pop();
    }
    else while(this.stack1.top) {
      let value = this.stack1.pop();
      this.stack2.push(value);
    }
    if(this.stack2.top) {
      return this.stack2.pop();
    }
    if(!this.stack2.top) {
      return null;
    }
    if(!this.stack1.top) {
      return null;
    }
  }
}
module.exports = PseudoQueue ;