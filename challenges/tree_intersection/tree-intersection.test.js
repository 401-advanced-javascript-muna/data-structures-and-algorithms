'use strict ';

const BinaryTree = require('../tree/binary-tree');
const Node =  require('../tree/node.js');
const treeIntersection = require('./tree-intersection.js');

describe('Tree Intersection',()=>{
  it('',()=>{
    let child1 = new Node(150);
    let child2 = new Node(100);
    let child3 = new Node(250);
    let child4 = new Node(75);
    let child5 = new Node(160);
    let child6 = new Node(125);
    let child7 = new Node(40);
    let child8 = new Node(200);

    child1.left = child2;
    child1.right = child3;
    child2.left = child4;
    child2.right = child5;
    child3.left =  child6;
    child3.right = child7;
    child7.left = child8;

    let tree1 = new BinaryTree(child1);
    let child12 = new Node(150);
    let child22 = new Node(100);
    let child32 = new Node(2);
    let child42 = new Node(75);
    let child52 = new Node(160);
    let child62 = new Node(15);
    let child72 = new Node(40);
    let child82 = new Node(20);

    child12.left = child22;
    child12.right = child32;
    child22.left = child42;
    child22.right = child52;
    child32.left =  child62;
    child32.right = child72;
    child72.left = child82;
    let tree2 = new BinaryTree(child12);
    // console.log('tree1',tree1);
    // console.log('tree2',tree2);

    let result = treeIntersection(tree1,tree2);
    // console.log('result',result)// [ 150, 100, 75, 160, 40 ]
    expect(result).toEqual([ 150, 100, 75, 160, 40]);
  });
});
