const prompt=require('prompt-sync')()//required prompt-sync module to execute code on Node.js

const marks=parseFloat(prompt('ENTER YOUR MARKS OUT OF 100'))
if(marks<0||marks>100){
console.error('INVALID ENTRY')
}
else if(marks>=50){
    console.log('YOU HAVE PASSED'+marks)
}
else{
    console.log('YOU HAVE FAILED')
}