/* eslint-disable no-unused-vars */
'use strict ';
 
const BinaryTree = require('./binary-tree.js')

class BinarySearchTree extends BinaryTree {
  constructor(root = null){
    super(root);
  }
  add(newNode){
    // if empty

    // if(this.root.left === null && this.root.val > newNode.val){this.root.left = newNode;}
    // if(this.root.right === null && this.root.val < newNode.val){this.root.right = newNode;}

  
      let _walk = (node =this.root) =>{
        console.log(node,'nnnnnnnnnnn')
  
        if(node.val > newNode.val && !node.left) //node.lft empty
        console.log('empty left')
        { node.left = newNode;
        }
        if(node.val > newNode.val){ //search in left
          console.log('searching left');

          _walk(node.left);
        }
  
        if(node.val < newNode.val && !node.right) //node.right empty
        { node.right = newNode;
          console.log('empty right')

        }
        else if(node.val < newNode.val){ //search in right
          console.log('search right')

          _walk(node.right);
        }
      };
      if (!this.root){this.root = newNode;}
      else{  _walk();
      }

  
    }
    
  contains(value){
    // if empty
    if (this.root === null ){return null;}

    else
    { let _walk = (node) =>{
      if (node.val === value) {return true;}
      else{
        while (node.left.val > value)
        { _walk(node.left);}

        while (node.right.val > value)
        { _walk(node.right);}
        console.log(node,'nnnnnnnnnnn')

        _walk(this.root);

      }
    };
    }
  }
  run(){
    super.postOrder();
    super.preOrder();
    super.inOrder();
  }

}
module.exports = BinarySearchTree;