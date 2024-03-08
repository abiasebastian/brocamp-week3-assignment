const prompt = require("prompt-sync")(); //required prompt-sync module to execute code on Node.js

const size = parseInt(prompt("ENTER SIZE OF THE ARRAY"));
let arr = [];

for (i = 0; i < size; i++) {
  arr.push(parseInt(prompt(`ENTER VALUE TO POSITION ${i} OF THE ARRAY : `)));
}
let temp;
console.log("UNSORTED ARRAY : "+arr);
for (i = 0; i < size; i++) {
  for (j = i + 1; j < size; j++) {
    if (arr[i] < arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log("SORTED ARRAY : "+arr);
