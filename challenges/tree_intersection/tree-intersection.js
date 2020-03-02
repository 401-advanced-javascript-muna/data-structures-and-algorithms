'use strict ';

const HashTable = require('../hash-table/hashtable.js');

function treeIntersection(tree1,tree2){
  if (tree1.root === null || tree2.root === null){
    return null;
  }
  else{
    let result = [];
    //Traversal first tree and hash every node
    let hashtable = new HashTable(1024);
    let _walk = (node)=>{
      // `'${node.val}'`
      hashtable.add(`'${node.val}'`, node.val);
      if(node.left)
      {   hashtable.add(`'${node.val}'`, node.val);
        _walk(node.left);
      }
      if(node.right)
      { hashtable.add(`'${node.val}'`, node.val);
        _walk(node.right);}
    };
    _walk(tree1.root);
    // tree2
    let _walk2 = (node2)=>{
      if (hashtable.contains(`'${node2.val}'`)){result.push(node2.val);}
      if(node2.left){
        //   {if (hashtable.contains(`'${node2.val}'`)){result.push(node2.val);
        _walk2(node2.left);
      }
      if(node2.right){
        //   {if (hashtable.contains(`'${node2.val}'`)){result.push(node2.val)
        _walk2(node2.right);}
    };
    _walk2(tree2.root);

    return result;
  }

}

module.exports = treeIntersection;