const library=[{
    title: 'Bill Gates',
    author: 'The Road Ahead',
    readingStatus: true
},
{
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    readingStatus: true
},
{
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    readingStatus: false
}
];

library.forEach(element => {
    if(element.readingStatus){
        console.log(`Already read '${element.title}' by ${element.author}`)
    }
    else{
        console.log(`You still need to read '${element.title}' by ${element.author}`);
    }
    
});
