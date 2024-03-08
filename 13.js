const prompt = require("prompt-sync")(); //required prompt-sync module to execute code on Node.js

const word = prompt("ENTER A WORD : ");
const wordUcase = word.toUpperCase();
const length = wordUcase.length;
let palindrome = true;
for (i = 0; i < (length - 1) / 2; i++) {
  if (wordUcase[i] != wordUcase[length - 1 - i]) {
    palindrome = false;
    break;
  }
}

palindrome ? console.log("PALINDROME") : console.log("NOT A PALINDROME");
