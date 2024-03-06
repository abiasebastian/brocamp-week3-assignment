const prompt=require('prompt-sync')()//required prompt-sync module to execute code on Node.js

const input=parseFloat(prompt(`ENTER A NUMBER`))

for (i=1;i<=10;i++) {
    console.log(`${i} X ${input} = ${i*input}`);
}