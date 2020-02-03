

const { Node, Stack, PseudoQueue} = require('./queue-with-stacks');


beforeEach(()=>{
  pseudoQueue = new PseudoQueue();
});

describe(`PseudoQueue()`, () => {

  describe(`enqueue()`, () => {

    it('Can successfully enqueue FIFO', () => {
      let queue = new PseudoQueue();
      queue.enqueue(10);
      queue.enqueue(15);
      queue.enqueue(20);
      expect(queue.front).toBeEqual(10);
      expect(queue.rear).toBeEqual(20);
    });

  });

  describe(`dequeue()`, () => {

    it('Can successfully do multiple dequeues', () => {
      let queue = new PseudoQueue();

      queue.enqueue(5);
      queue.enqueue(8);
      queue.enqueue(9);
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      expect(queue.front).toBeNull();
      expect(queue.rear).toBeNull();
      expect(queue.isEmpty()).toBeTruthy();
    });

  });

});