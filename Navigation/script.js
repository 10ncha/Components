const arr = [10, 20, 30, 40, 50];

let sum = 0;
arr.forEach((ele) => sum += ele);

// filter retruns a new array with condition specific elements;
const newArr = arr.filter((ele) => ele > 0);
// console.log(newArr);

const callback = (ele) => ele > 20;  

arr.filtering = function(callback){
    const arr = [];
    for(let ele of this){
        if(callback(ele)){
            arr.push(ele);
        }
    }
    return arr;
}
const a = arr.filtering(callback);
console.log(a);
 

 