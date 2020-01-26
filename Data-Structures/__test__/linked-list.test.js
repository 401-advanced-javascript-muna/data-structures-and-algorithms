  
'use strict';

const Node = require('../lib/linked-list');

describe('Node Module', () => {
  it('constructor', () => {
    let value = 'test value';
    let node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });


});