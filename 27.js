prompt = require("prompt-sync")(); //required prompt-sync module to execute code on Node.js

let input = parseFloat(prompt(`ENTER YOUR HEIGHT : `));


try {
    if(input==NaN){
        throw "NOT A NUMBER"
    }
    else if(input<40){
        throw "TOO SMALL"
    }
    else if(input>200){
        throw "TOO LARGE"
    }
    else{
  console.log("VALID");
    }
}
catch (error) {
  console.log("ERROR : " + error);
} 
