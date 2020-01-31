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
      return this;
    }
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;
  }
  includes(value){
    let node = new Node(value);

    let currentNode = this.head;    //Initialize current
    while (currentNode !== null)
    {
      if (currentNode.value === value) {
        currentNode = currentNode.next;
        return true;    //data found
      }
      return false;
    }}
  toString()  {
    let currentNode = this.head;
    let allNodeString = '';
    while (currentNode) {
      allNodeString += ` ${currentNode.value} ->`;
      currentNode = currentNode.next;
    }
    // console.log('hhhhhh',allNodeString += ' NULL');
    return allNodeString += ' NULL';
    // "{ a } -> { b } -> { c } -> NULL"
  }
  //from ibrahim
  llMerge(l1,l2){
    // console.log(l1.value,'1**************');
    // console.log(l2.value,'2**************');
    let currentNode1 = l1.head;
    let currentNode2 = l2.head;
    // console.log('curentNodes',currentNode1.value,currentNode2.value);

    while (currentNode1 || currentNode2) {
      if (currentNode1 !== null) {//if is not empty
        this.insert(currentNode1.value);//insert value
        currentNode1 = currentNode1.next;//go next in l1
      }
      if (currentNode2 !== null) {
        this.insert(currentNode2.value);
        currentNode2 = currentNode2.next;
      }
    }
    return this;
  }
  insertBeforeHead(value){
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    return this;

  }
  reverseSLL(list){
    let  tmplist = new LinkedList();
    //  ,previous;
    let currentNode = list.head;

    if(!currentNode){return 'can not reverse the linked list is empty';}
    else{
      while(currentNode){
        tmplist.insertBeforeHead(currentNode.value);
        currentNode = currentNode.next;

      }
    }
    return tmplist;
  }

}

module.exports = LinkedList;