const prompt=require('prompt-sync')()//required prompt-sync module to execute code on Node.js

const marks=parseFloat(prompt('ENTER YOUR MARKS OUT OF 100'))
if(marks<0||marks>100){
    console.log('INVALID ENTRY')
}
else if(marks>90){
    console.log('A')
}
else if(marks>80){
    connsole.log('B')
}
else if(marks>70){
    console.log('C')
}
else if(marks>60){
    console.log('D')
}
else if(marks>=50){
    console.log('E')
}
else{
    console.log('YOU HAVE FAILED')
}