class ArrayOps{
    ArrayOps(){}
    fillArray(Size) {
        let arr = [];
        for (let i = 0; i < Size; i++) {
          arr.push([])
          for (let j = 0; j < Size; j++) {
            arr[i].push(parseInt(prompt(`ENTER VALUE TO POSITION [${i}][${j}] OF ARRAY : `)));
          }
        }
        return arr;
      }
      displayArray(Arr,Size){
        for(let i=0;i<Size;i++){
            console.log(Arr[i].join(" "))
        }
        }
}
const prompt = require("prompt-sync")(); //required prompt-sync module to execute code on Node.js

function main(){
    const arrayOps=new ArrayOps()
    const size=parseInt(prompt('ENTER SIZE OF THE ARRAY : '))
    const arr=arrayOps.fillArray(size)
    arrayOps.displayArray(arr,size)
}

main()