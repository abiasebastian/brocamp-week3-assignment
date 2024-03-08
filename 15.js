const prompt = require("prompt-sync")(); //required prompt-sync module to execute code on Node.js
let array=[];
main()
function getArray(){
    let size=prompt("ENTER SIZE OF THE ARRAY : ")
    for(i=0;i<size;i++){
        array.push(prompt(`ENTER VALUE POSITION ${i} TO THE ARRAY : `))
    }
    
}
function displayArray(){
    console.log(array)
}
function main(){
    getArray()
    displayArray()
}