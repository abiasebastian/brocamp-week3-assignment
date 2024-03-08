class Operations {
  Operations() {}
  add = (Num1, Num2) => {
    return Num1 + Num2;
  };
  substract = (Num1, Num2) => {
    return Num1 - Num2;
  };
  multiply = (Num1, Num2) => {
    return Num1 * Num2;
  };
  divide = (Num1, Num2) => {
    return Num1 / Num2;
  };
}
const prompt = require("prompt-sync")(); //required prompt-sync module to execute code on Node.js

let num1 = parseFloat(prompt(`ENTER NUM1 : `));
let num2 = parseFloat(prompt(`ENTER NUM2 : `));
let operation = parseInt(
  prompt(`ENTER 1 FOR ADDITION
ENTER 2 FOR SUBSTRACTION
ENTER 3 FOR MUTIPLICATION
ENTER 4 FOR DIVISION
`)
);
const arithOps = new Operations();

const result = () => {
  switch (operation) {
    case 1:
      return arithOps.add(num1, num2);
    case 2:
        return arithOps.substract(num1, num2);
    case 3:
        return arithOps.multiply(num1, num2);
    case 4:
        return arithOps.divide(num1, num2);
    default:
      return "INVALID ENTRY";
  }
};

console.log(result());
