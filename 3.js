const prompt=require('prompt-sync')()//required prompt-sync module to execute code on Node.js

console.log('THIS IS A PROGRAM TO CALCULATE SIMPLE INTEREST\n')
const pAmount=parseFloat(prompt('ENTER PRINCIPAL AMOUNT'))
const intRate=parseInt(prompt('ENTER INTEREST RATE'))
const tenure=parseInt(prompt('ENTER TENURE'))
console.log(`SIMPLE INTEREST FOR THE DEPOSIT IS '${(pAmount*intRate*tenure)/100}'`)