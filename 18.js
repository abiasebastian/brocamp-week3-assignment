const prompt = require("prompt-sync")(); //required prompt-sync module to execute code on Node.js
const written = parseFloat(prompt(`ENTER MARKS OF YOUR WRITTEN TEST : `));
const lab = parseFloat(prompt(`ENTER MARKS OF YOUR PRACTICAL TEST : `));
const assignment = parseFloat(prompt(`ENTER MARKS OF YOUR ASSIGNMENT : `));
const total = (written * 70) / 100 + (lab * 20) / 100 + (assignment * 10) / 100;
console.log(`YOUR OVERALL GRADE IS "${total}"`);
