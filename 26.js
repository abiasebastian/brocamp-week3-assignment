const prompt = require("prompt-sync")(); // Required prompt-sync module to execute code on Node.js

let input = prompt(`ENTER INPUT : `);
let inputac = Number(input); // Convert input to a number

let my_string;


if (isNaN(inputac)) {
    my_string = input; // If input is not a number, assign it directly
} else {
    my_string = inputac; // If input is a number, assign the converted number
}

try {
    console.log("REVERSED STRING IS " + my_string.split(` `).reverse().join(' ')); // Join with space as separator
} catch (error) {
    console.log("ERROR : " + error.message); // Specify the error message
} finally {
    console.log("Type of 'my_string' is " + typeof my_string);
}
