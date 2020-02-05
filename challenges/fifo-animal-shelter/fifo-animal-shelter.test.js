

const Fifo = require('./fifo-animal-shelter');


describe('Animals', () => {
  it('Can successfully enqueue if cat or dog', () => {
    let queue = new Fifo.AnimalShelter();
    queue.enqueue('dog');
    expect(queue.front).toEqual('dog');
    expect(queue.rear).toEqual('dog');

  });
  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Fifo.AnimalShelter();
    queue.enqueue('dog');
    queue.enqueue('cat');
    queue.enqueue('dog');
    expect(queue.front).toEqual('dog');
    expect(queue.rear).toEqual('dog');

  });
  it('Can successfully just enqueue cat or dog', () => {
    let queue = new Fifo.AnimalShelter();
    queue.enqueue('lion');
    // queue.enqueue('cat');
    // queue.enqueue('dog');
    expect(queue.front).toBeNull();
    // expect(queue.rear).toEqual('dog');

  });
  it('Can successfully dequeue cat or dog', () => {
    let queue = new Fifo.AnimalShelter();
    queue.enqueue('cat');
    queue.enqueue('cat');
    queue.enqueue('dog');
    queue.dequeue('dog');
    expect(queue.front).toEqual('cat');
    // expect(queue.rear).toEqual('dog');

  });

});