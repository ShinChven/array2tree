/**
 * make tree from array
 */

const arr = require('./data/array.json');
const rootId = 0;

const array2tree = require('../src/array2tree.js');
const result=array2tree(rootId,arr);

console.log(result);
const fs = require('fs');
console.log('save tree...');
fs.writeFileSync("./test/data/tree.json", result);