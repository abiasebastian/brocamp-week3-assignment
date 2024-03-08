const prompt = require("prompt-sync")(); //required prompt-sync module to execute code on Node.js

let size = prompt(`ENTER SIZE OF THE EQUILATERAL 2D ARRAY : `);
let arr1 = fillArray(size);
displayArray(arr1,size)
let arr2 = fillArray(size);
displayArray(arr2,size)
console.log("SUM OF THE 2D ARRAY")
let sumArr = addArray(arr1,arr2,size);
displayArray(sumArr,size)

function fillArray(Size) {
  let arr = [];
  for (i = 0; i < Size; i++) {
    arr.push([])
    for (j = 0; j < Size; j++) {
      arr[i].push(parseInt(prompt(`ENTER VALUE TO POSITION [${i}][${j}] OF ARRAY : `)));
    }
  }
  return arr;
}

function addArray(Arr1, Arr2, Size) {
  let arr = [];
  for (i = 0; i < Size; i++) {
    arr.push([])
    for (j = 0; j < Size; j++) {
      arr[i].push(Arr1[i][j] + Arr2[i][j]);
    }
  }
  return arr;
}
function displayArray(Arr,Size){
for(i=0;i<Size;i++){
    console.log(Arr[i].join(" "))
}
}

