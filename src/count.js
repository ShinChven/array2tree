var dataArr=require('../data/tree.json');

var count = 0;

function addCount(){
    count++;
}

function findCount(object){
    for (var index in object) {
        if (object.hasOwnProperty(index)) {
            var element = object[index];
            addCount();
            findCount(element.children);
        }
    }
}

// count how many items in tree
findCount(dataArr);

console.log(count);