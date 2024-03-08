prompt = require("prompt-sync")(); //required prompt-sync module to execute code on Node.js
let arr=[4,3,54,3,5,2,1]
 function sum(Arr,Callback){
console.log(Callback(Arr))
 }

function add(Arr){
    let sum=0;
    Arr.forEach(element => {
        sum+=element;
    });
    return sum
}

sum(arr,add)