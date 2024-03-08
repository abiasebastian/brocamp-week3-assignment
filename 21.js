const prompt = require("prompt-sync")(); //required prompt-sync module to execute code on Node.js
let size=parseInt(prompt('ENTER SIZE OF THE ARRAY : '))
let arr=[]
for(i=0;i<size;i++){
    arr.push(parseInt(prompt(`ENTER VALUE TO POSITION ${i} OF THE ARRAY`)))
}
let arr2=[]
for(i=0;i<size-1;i++){
    arr2.push(arr[i]+arr[i+1])
}
console.log(arr2)
