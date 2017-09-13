var arr = require('../data/array.json');

var rootId = 0;

var treeArr = findChildren(rootId);

var mycount = 1;

function findChildren( parentId) {
    var treeArr = [];
    for (var i = 0; i < arr.length;) {
        var item = arr[i];
        if (item.parentId == parentId) {
            treeArr.push(item);
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
    for (var index in treeArr) {
        var parent = treeArr[index];
        parent['children'] = findChildren(parent['id']);
    }
    return treeArr;
}

var result = JSON.stringify(treeArr, null, 2);
console.log(result);
const fs = require('fs');
console.log('save tree...');
fs.writeFileSync("./data/tree.json", result);