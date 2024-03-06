const prompt = require("prompt-sync")(); //required prompt-sync module to execute code on Node.js

const size = parseInt(prompt("ENTER SIZE OF THE ARRAY"));
let arr = [];

for (i = 0; i < size; i++) {
  arr.push(parseInt(prompt(`ENTER VALUE TO POSITION ${i} OF THE ARRAY : `)));
}

let count = 0;
for (element of arr) {
  element % 2 == 0 ? count++ : null;
}

console.log(`NUMBER OF EVEN NUMBERS IN THE ARRAY IS '${count}'`);
