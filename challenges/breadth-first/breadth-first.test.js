'use strict ';

const Node = require('../tree/node.js');
const BinaryTree = require('../tree/binary-tree.js');
const BinarySearchTree = require('../tree/binary-search-tree.js');
const breadthFirst = require('./breadth-first.js');

describe('Breadth First Traversal  Module:',()=>{
  it('Can successfully return null to an empty tree',()=>{
    let tree = new BinaryTree();
    // console.log(tree,'tree');

    expect(breadthFirst(tree)).toBeNull();

  });
});
describe('Breadth First Traversal  Module:',()=>{
  it('Can successfully return a collection from a Breadth First traversal',()=>{
    let child1 = new Node(10);
    let child2 = new Node(30);
    let child3 = new Node(5);
    let child4 = new Node(4);
    let child5 = new Node(3);
    let child6 = new Node(15);
    let child7 = new Node(40);

    let tree = new BinarySearchTree();
    tree.add(child1);  //level 0 : 10
    tree.add(child2);  //level 1 : 5,30
    tree.add(child3);  //level 2 : 4,15,40
    tree.add(child4);  //level 3 : 3
    tree.add(child5);
    tree.add(child6);
    tree.add(child7);
    console.log(tree.preOrder(),'llllllllllll');
    //   [ 10, 5, 4, 3, 30, 15, 40 ]   [ 10, 5, 30, 4, 15, 40, 3 ]
    expect(breadthFirst(tree)).toEqual([ 10, 5, 30, 4, 15, 40, 3 ]);


  });
});