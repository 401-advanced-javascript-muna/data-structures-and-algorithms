/* eslint-disable no-unused-vars */
'use strict ';

const BinaryTree = require('./binary-tree.js/index.js');

class BinarySearchTree extends BinaryTree {
  constructor(root = null){
    super(root);
  }
  add(newNode){
    // if empty
    if (!this.root){  this.root = newNode;}

    let walk = (node) =>{
      // console.log(node.val,'nnnnnnnnnnn');

      if((node.val > newNode.val) && (!node.left)) //node.lft empty
      {
        // console.log('empty left');
        // console.log('treeeeeee4',this.root);

        node.left = newNode;
      }
      if(node.val > newNode.val){ //search in left
        // console.log('searching left',node.left);
        // console.log('treeeeeee3',this.root);

        walk(node.left);
      }

      if(node.val < newNode.val && !node.right) //node.right empty
      { node.right = newNode;
        // console.log('empty right',node.right);
        // console.log('treeeeeee1',this.root);


      }
      else if(node.val < newNode.val){ //search in right
        // console.log('search right',node.right);
        // console.log('treeeeeee2',this.root);

        walk(node.right);
      }
    };
    if(this.root){  walk(this.root);
      // console.log('walk walk walk');
    }


  }

  contains(value){
    let currentNode = this.root;
    while (currentNode !== null){
      if (currentNode.val === value){ //if find
        return true;
      }
      else if (value < currentNode.val){  //go left
        currentNode = currentNode.left;
      }else{
        currentNode = currentNode.right; //or go right
      }
    }
    return false;
  }

  

  
  run(){
    super.postOrder();
    super.preOrder();
    super.inOrder();
  }

}
module.exports = BinarySearchTree;