const prompt=require('prompt-sync')()//required prompt-sync module to execute code on Node.js

const limit = parseInt(prompt('ENTER A LIMIT'))
var sum=0;
for(i=1;i<=limit;i+=2){
    sum+=i
}
console.log("SUM OF ODD NUMBERS UPTO THE LIMIT YOU HAVE ENTERED IS "+sum);