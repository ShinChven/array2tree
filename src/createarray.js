function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

var arr=[];

for (var i = 0; i<50; i++){
    arr[i]={
        id:i+1,
        parentId:getRandomInt(0,15)
    }
}

console.log('save array...');
console.log(arr);

require('fs').writeFileSync('./data/array.json',JSON.stringify(arr,null,2));