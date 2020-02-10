'use strict ';

const Node = require('./node.js');
const BinaryTree = require('./binary-tree.js');
const BinarySearchTree = require('./binary-search-tree.js');

describe('Binary Tree Module:',()=>{
  it('Can successfully instantiate an empty tree',()=>{
    let tree = new BinaryTree();
    // console.log(tree,'tree');

    expect(tree.root).toBeNull();

  });
  it('Can successfully instantiate a tree with a single root node',()=>{
    let node = new Node(1);
    let tree = new BinarySearchTree(node);

    expect(tree.root.val).toEqual(1);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  });
  it('Can successfully add a left child and right child to a single root node',()=>{
    let one = new Node(2);
    let two = new Node(5);
    let three = new Node(1);
    let tree1 = new BinarySearchTree(one);
    expect(tree1.root.val).toEqual(2);
    tree1.add(two);
    expect(tree1.root.right.val).toEqual(5);
    tree1.add(three);
    expect(tree1.root.left.val).toEqual(1);

  });
});
//   describe('Binary Tree Module:',()=>{
//   it('Can successfully return a collection from a preorder traversal',()=>{
//       let child1 = new Node(10);
//       let child2 = new Node(30);
//       let child3 = new Node(5);
//       let child4 = new Node(4);
//       let child5 = new Node(3);
//       let child6 = new Node(15);
//       let child7 = new Node(40);
//     //   new BinaryTree(child1);
//       let tree = new BinarySearchTree(child1);
//       tree.add(child2);
//       tree.add(child3);
//       tree.add(child4);
//       tree.add(child5);
//       tree.add(child6);
//       tree.add(child7);
// console.log(tree.preOrder(),'llllllllllll');
//     expect(tree.preOrder()).toEqual([10,5,4,3,30,15,40]);
//   });
//   it('Can successfully return a collection from an inorder traversal',()=>{
//     expect();
//   });
//   it('Can successfully return a collection from a postorder traversal',()=>{
//     expect();
//   });
// });











