'use strict';


const Stack = require('./stack-and-queue');

describe('Stack', () => {
  describe('push()', () => {
    it('should push an item', () => {
      let stack = new Stack();
      expect(stack.peek()).toBeNull();
      stack.push('Instance');
      expect(stack.peek()).toEqual('Instance');
      stack.push('Sally');
      expect(stack.peek()).toEqual('Sally');
    });
  });

  describe('pop()', () => {
    it('should return the top item and remove it', () => {
      let stack = new Stack();
      stack.push('A');
      stack.push('B');
      stack.push('C');
      expect(stack.pop()).toEqual('C');
      expect(stack.pop()).toEqual('B');
      expect(stack.pop()).toEqual('A');
      stack.pop();
      // console.log('ddddddddddddddddddddddddddddddddddddddddd',stack);
      expect(stack.peek()).toBeNull();
    });
  });
  describe('peek()', ()=> {
    it('should return the top of stack', () => {
      let stack = new Stack();
      stack.push('Instance');
      expect(stack.peek()).toEqual('Instance');
    });
  });
  describe('isEmpty()', ()=> {
    it('should return the top of stack', () => {
      let stack = new Stack();
      expect(stack.isEmpty()).toBeFalsy();
      stack.push('hi');
      expect(stack.isEmpty()).toBeTruthy();

    });
  });
});