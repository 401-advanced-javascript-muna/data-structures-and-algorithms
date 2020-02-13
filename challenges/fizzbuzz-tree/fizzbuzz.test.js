'use strict ';

const fizzBuzz = require('./fizzbuzz.js');

const Node = require('../tree/node');

// const BinaryTree = require('../tree/binary-tree');

const BinarySearchTree = require('../tree/binary-search-tree.js');


describe('Fizz-Buzz Tree', ()=> {

  it('Return fizz When value %3 =0', () => {
    let child1 = new Node(3);
    let child2 = new Node(9);
    let child3 = new Node(12);
    let tree = new BinarySearchTree();
    tree.add(child1);
    tree.add(child2);
    tree.add(child3);
    expect(fizzBuzz(tree)).toEqual([ 'fizz', 'fizz', 'fizz' ]);
  });
  it('Return buzz When value %5 =0', () => {
    let child1 = new Node(10);
    let child2 = new Node(25);
    let child3 = new Node(5);
    let tree = new BinarySearchTree();
    tree.add(child1);
    tree.add(child2);
    tree.add(child3);
    expect(fizzBuzz(tree)).toEqual([ 'buzz', 'buzz', 'buzz' ]);
  });
  it('Return fizzbuzz when value%3=0 and value%5=0', () => {
    let child1 = new Node(10);
    let child2 = new Node(30);
    let child3 = new Node(5);
    let child4 = new Node(4);
    let child5 = new Node(3);
    let child6 = new Node(15);
    let child7 = new Node(40);
    let tree = new BinarySearchTree();
    tree.add(child1);
    tree.add(child2);
    tree.add(child3);
    tree.add(child4);
    tree.add(child5);
    tree.add(child6);
    tree.add(child7);
    expect(fizzBuzz(tree)).toEqual([ 'buzz', 'buzz', '4', 'fizz', 'fizzBuzz', 'fizzBuzz', 'buzz' ]);
  });
});