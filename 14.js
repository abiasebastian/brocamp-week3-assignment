const prompt = require("prompt-sync")(); //required prompt-sync module to execute code on Node.js
let arr=[]
let size=parseInt(prompt(`ENTER SIZE OF THE EQUILATERAL ARRAY : `))
//PUSHED EMPTY ARRAYS TO FORM MULTIDIMENSIONAL ARRAY
for(i=0;i<size;i++){
    arr.push([])
}
//PUSH VALUES TO FIRST 2D ARRAY
for(i=0;i<size;i++){
    for(j=0;j<size;j++){
    arr[i].push(parseInt(prompt(`ENTER VALUE TO POSITION [${i}][${j}] OF ARRAY 1 :`)))
    }
}

let arr2=[]
//PUSHED EMPTY ARRAYS TO FORM MULTIDIMENSIONAL ARRAY
for(i=0;i<size;i++){
    arr2.push([])
}
//PUSH VALUES TO SECOND 2D ARRAY
for(i=0;i<size;i++){
    for(j=0;j<size;j++){
    arr2[i].push(parseInt(prompt(`ENTER VALUE TO POSITION [${i}][${j}] OF ARRAY 2 : `)))
    }
}

let sum=[]
//PUSHED EMPTY ARRAYS TO FORM MULTIDIMENSIONAL ARRAY
for(i=0;i<size;i++){
    sum.push([])
}
//PUSH VALUES TO SECOND 2D ARRAY
for(i=0;i<size;i++){
    for(j=0;j<size;j++){
    sum[i].push(arr[i][j]+arr2[i][j])
    }
}

console.log(sum)

