/* eslint-disable indent */
/* eslint-disable no-undef */
'use strict ';

// const HashTable = require('../hash-table/hashtable.js');


function leftJoin(hash1, hash2) {
    console.log('index', hash1.HashTable, hash2);

    // let leftJoinArray = [];
    let result = [];
    if (hash1 === [] || hash2 === []) {
        return null;
    }

    // hashmap1 = HashTable.hash1.map();
    for (let i = 0; i < 1024; i++) {
        // if(hash1.contains(hashmap1[i]){
        if (hash1.map[i]) {
            // console.log('nnnnn', hash1.map[i].head.val);
            // console.log('nnnnn', hash1.map[i].head.val[0]);
            let Key1 = hash1.map[i].head.val[0];
            let value1 = hash1.map[i].head.val[1];

            let value2 = hash2.get(Key1);
            result.push([`${Key1}`, `${value1}`, `${value2}`]);

        }
    }
    // console.log('resulttttttttt', result);
    return result;
}


module.exports = leftJoin;