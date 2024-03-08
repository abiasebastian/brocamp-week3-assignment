prompt = require("prompt-sync")(); //required prompt-sync module to execute code on Node.js

let input = prompt(`ENTER INPUT : `);
let inputac=Number(input)
let my_string;
if(inputac==NaN){
    my_string=input
}
else{
    my_string=inputac
}
try {
  console.log("REVERSED STRING IS " + my_string().split(` `).reverse().join());
} catch (error) {
  console.log("ERROR : " + error.message);
} finally {
  console.log("Type of 'my_string' is " + typeof my_string);
}
