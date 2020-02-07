'use strict ';

const PseudoQueue = require('./queue-with-stacks');


describe(`PseudoQueue()`, () => {

  describe(`enqueue()`, () => {
    it('Can successfully enqueue for empty queue', () => {
      let queue = new PseudoQueue();
      queue.enqueue(5);
      expect(queue.stack1.top.value).toEqual(5);
    });
    it('Can successfully enqueue multi values to empty queue', () => {
      let queue = new PseudoQueue();
      queue.enqueue(10);
      queue.enqueue(15);
      queue.enqueue(20);
      expect(queue.stack1.top.value).toEqual(20);
    });
    it('Can successfully enqueue a value to non empty queue', () => {
      let queue = new PseudoQueue();
      queue.enqueue(10);
      queue.enqueue(15);
      queue.enqueue(20);
      expect(queue.stack1.top.value).toEqual(20);
      queue.enqueue('hi');
      expect(queue.stack1.top.value).toEqual('hi');

    });
  });

  describe(`dequeue()`, () => {
    it('Can successfully do dequeue to one value un the quueue', () => {
      let queue = new PseudoQueue();

      queue.enqueue(5);
      expect(queue.stack1.top.value).toEqual(5);
      expect(queue.dequeue()).toEqual(5);
      expect(queue.dequeue()).toBeNull();
    });

    it('Can successfully do multiple dequeues', () => {
      let queue = new PseudoQueue();

      queue.enqueue(5);
      queue.enqueue(8);
      queue.enqueue(9);
      queue.enqueue(7);
      queue.enqueue(5);
      queue.dequeue();
      expect(queue.dequeue()).toEqual(8);
    });
    it('Can successfully empty the queue', () => {
      let queue = new PseudoQueue();

      queue.enqueue(5);
      queue.enqueue(8);
      queue.enqueue(9);
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      expect(queue.dequeue()).toBeNull();
    });
  });

});