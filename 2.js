const prompt=require('prompt-sync')() //required prompt-sync module to execute code on Node.js

const num1= parseInt(prompt("ENTER A NUMBER"))
const num2=parseFloat(prompt("ENTER ANOTHER NUMBER"))
const sum=num1+num2
console.log(`SUM OF NUMBERS YOU HAVE ENTERED IS  ${sum}`);