'use strict ';

class BinaryTree{
  constructor(root = null){
    this.root = root;
  }

  //preOrder()  Data->L->R (PLR)
  preOrder(){

    let results = [];

    let _walk = (node)=>{
      results.push(node.val);   //data
      if (node.left) _walk(node.left); //if there is a left invoke _walk with left node
      if(node.right) _walk(node.right);  //right
    };
    _walk(this.root);// invoking _walk  /the root or root for sub tree
    return results;
  }

  // inOrder() L->D->R (LPR)
  inOrder(){
    let results = [];
    let _walk = (node)=>{
      if(node.left) _walk(node.left);
      results.push(node.val);
      if(node.right)_walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  //postOrder() L->R->D (LRP)
  postOrder(){
    let results = [];

    let _walk = (node)=>{
      if(node.left)_walk(node.left);
      if(node.right) _walk(node.right);
      results.push(node.val);
    };
    _walk(this.root);
    return results;
  }


}
module.exports = BinaryTree;