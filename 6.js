const prompt = require("prompt-sync")(); //required prompt-sync module to execute code on Node.js

console.log(`
ENTER 1 FOR SUNDAY
ENTER 2 FOR MONDAY
ENTER 3 FOR TUESDAY
ENTER 4 FOR WEDNESDAY
ENTER 5 FOR THURSDAY
ENTER 6 FOR FRIDAY
ENTER 7 FOR SATURDAY
`);
const input = parseInt(prompt("ENTER YOUR CHOICE"));
var day = false;
switch (input) {
  case 1:
    day = "SUNDAY";
    break;
  case 2:
    day = "MONDAY";
    break;
  case 3:
    day = "TUESDAY";
    break;
  case 4:
    day = "WEDNESDAY";
    break;
  case 5:
    day = "THURSDAY";
    break;
  case 6:
    day = "FRIDAY";
    break;
  case 7:
    day = "SATURDAY";
  default:
    break;
}

if(day){
    console.log('YOU HAVE CHOOSED '+day)
}
else{
    console.log('INVALID ENTRY');
}
