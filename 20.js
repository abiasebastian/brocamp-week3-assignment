//Commented code can only be used in Node.js
let num=1
let numArray=[]
for(i=1;i<=4;i++){
    for(j=1;j<=i;j++){
        numArray.push(num)
        //process.stdout.write(num.toString())
        //process.stdout.write(' ')
        num++
    }
    console.log(numArray.join(' '))
    numArray=[]
    
    
}