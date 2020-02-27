'use strict ';

let HashTable = require('./hashtable.js');

describe('Hashtable',()=>{
  it('Adding a key/value to your hashtable results in the value being in the data structure',()=>{
    let hashmap = new HashTable(1024);
    hashmap.add('name', 'muna');
    let index = hashmap.hash('name');
    expect(hashmap.map[index].head.val[0]).toEqual('name', 'muna');

  });
  it('Retrieving based on a key returns the value stored',()=>{
    let hashmap = new HashTable(1024);
    hashmap.add('name', 'muna');
    hashmap.add('age', 32);
    hashmap.add('married', true);
    expect(hashmap.get('age')).toEqual(32);

  });
  it('Successfully returns null for a key that does not exist in the hashtable',()=>{
    let hashmap = new HashTable(1024);
    hashmap.add('name', 'muna');
    hashmap.add('age', 32);
    hashmap.add('married', true);
    expect(hashmap.get('hiii')).toBeNull();
  });
  it('Successfully handle a collision within the hashtable',()=>{
    let hashmap = new HashTable(1024);
    hashmap.add('listen', 'muna');
    hashmap.add('silent', 'true');
    hashmap.add('lsteni', 5);
    expect(hashmap.get('lsteni')).toEqual(5);

  });
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
    let hashmap = new HashTable(1024);
    hashmap.add('listen', 'muna');
    hashmap.add('silent', 'true');
    hashmap.add('lsteni', 5);
    expect(hashmap.get('lsteni')).toEqual(5);
  });
  it('Successfully hash a key to an in-range value',()=>{
    let hashmap = new HashTable(1024);
    hashmap.add('name', 'muna');

    expect(hashmap.hash('name')).toEqual(37);
  });
});


