'use strict ';

const Node = require('./node.js');

const BinaryTree = require('./binary-tree.js');

describe('Find Max Value in Binary Tree', () => {
  let tree = null;

  beforeAll(() => {
    let one = new Node(5);
    let two = new Node(4);
    let three = new Node(9);
    let four = new Node(3);
    let five = new Node(1);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    tree = new BinaryTree(one);
  });

  it('findMaximumValue()', () => {
    let findMax = tree.findMaximumValue();
    expect(findMax).toEqual(9);

  });
});