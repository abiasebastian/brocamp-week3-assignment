const prompt = require("prompt-sync")(); //required prompt-sync module to execute code on Node.js
let num=prompt("ENTER A NUMBER : ")
let prime=true;
for(i=2;i<=num/2;i++){
num%i==0 ? prime=false : null
}
if(prime){
    console.log("PRIME");
}
else{
    console.log("COMPOSITE");
}