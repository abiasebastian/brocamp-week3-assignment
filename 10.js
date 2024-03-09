const prompt = require("prompt-sync")(); //required prompt-sync module to execute code on Node.js

const limit1 = parseInt(prompt("ENTER LIMIT OF ARRAY 1 : "));
let arr1 = [];
console.log(`ENTER ${limit1} ELEMENTS TO ARRAY 1 : `);
for (i = 0; i < limit1; i++) {
  console.log(`ENTER VALUE TO POSITION ${i} OF ARRAY 1 : `);
  arr1.push(prompt());
}
const limit2 = parseInt(prompt("ENTER LIMIT OF ARRAY 2 : "));
let arr2 = [];
console.log(`ENTER ${limit2} ELEMENTS TO ARRAY 2 : `);
for (i = 0; i < limit1; i++) {
  console.log(`ENTER VALUE TO POSITION ${i} OF ARRAY 2 : `);
  arr2.push(prompt());
}

console.log(`ARRAY 1 : ${arr1}
ARRAY 2 : ${arr2}`);

//ARRAY SWAP
let temp = arr1;
arr1 = arr2;
arr2 = temp;

console.log(`
ARRAYS AFTER SWAP

ARRAY 1 : ${arr1}
ARRAY 2 : ${arr2}`);
