

const sq = require('./stack-and-queue');


describe('Stack', () => {
  describe('push()', () => {
    it('Can successfully push onto a stack', () => {
      let stack = new sq.Stack();
      expect(stack.peek()).toBeNull();
      stack.push('A');
      expect(stack.peek()).toEqual('A');
    });
    it('Can successfully push multiple values onto a stack', () => {
      let stack = new sq.Stack();
      expect(stack.peek()).toBeNull();
      stack.push('A');
      expect(stack.peek()).toEqual('A');
      stack.push('B');
      expect(stack.peek()).toEqual('B');
    });
    it('Can successfully pop off the stack', () => {
      let stack = new sq.Stack();
      stack.push('A');
      stack.push('B');
      stack.push('C');
      expect(stack.pop()).toEqual('C');
      expect(stack.pop()).toEqual('B');
      expect(stack.pop()).toEqual('A');
    });
    it('Can successfully empty a stack after multiple pops', () => {
      let stack = new sq.Stack();
      stack.push('A');
      stack.push('B');
      stack.push('C');
      expect(stack.pop()).toEqual('C');
      expect(stack.pop()).toEqual('B');
      expect(stack.pop()).toEqual('A');
      stack.pop();
      expect(stack.peek()).toBeNull();
    });
    it('Can successfully peek the next item on the stack', () => {
      let stack = new sq.Stack();
      stack.push('a');
      expect(stack.peek()).toEqual('a');
    });
    it('Can successfully instantiate an empty stack', () => {
      let stack = new sq.Stack();
      expect(stack.isEmpty()).toBeFalsy();
      stack.push('hi');
      expect(stack.isEmpty()).toBeTruthy();

    });
  });
});

describe('Queue', () => {
  it('Can successfully enqueue into a queue', () => {
    let queue = new sq.Queue();
    queue.enqueue('A');
    expect(queue.front).toEqual('A');
    expect(queue.rear).toEqual('A');

  });
  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new sq.Queue();
    queue.enqueue('A');
    queue.enqueue('B');
    queue.enqueue('C');
    expect(queue.front).toEqual('A');
    expect(queue.rear).toEqual('C');

  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new sq.Queue();
    queue.enqueue('A');
    queue.enqueue('B');
    queue.enqueue('C');
    let item = queue.dequeue();
    expect(item).toEqual('A');
    expect(queue.front).toEqual('B');
    expect(queue.rear).toEqual('C');
    queue.dequeue();
    queue.dequeue();
    expect(queue.dequeue()).toBeNull();
    expect(queue.front).toBeNull();
    expect(queue.rear).toBeNull();

  });
  it('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new sq.Queue();
    queue.enqueue('A');
    queue.enqueue('B');
    queue.enqueue('C');
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.dequeue()).toBeNull();
    expect(queue.front).toBeNull();
    expect(queue.rear).toBeNull();

  });
  it('Can successfully peek into a queue, seeing the expected value',()=>{
    let queue = new sq.Queue();
    queue.enqueue('A');
    queue.enqueue('B');
    queue.enqueue('C');
    queue.enqueue('D');

    expect(queue.peek()).toEqual('A');
    // expect(queue.rear).toEqual('D');
  });
  it('Can successfully instantiate an empty queue',()=>{
    let queue = new sq.Queue();
    expect(queue.isEmpty()).toBeFalsy();
    queue.enqueue('A');
    expect(queue.isEmpty()).toBeTruthy();

  });
});