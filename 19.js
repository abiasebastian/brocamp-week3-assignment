const prompt = require("prompt-sync")(); //required prompt-sync module to execute code on Node.js

let num=prompt(`ENTER YOUR INCOME : `)
let tax
if(num<=250000){
    tax="NO TAX"
}
else if(num < 500000){
    tax="5%"
}
else if(num<1000000){
    tax="20%"
}
else {
    tax="30%"
}
console.log(tax)