// Code your solutions in this file
function countDown(count){
    for (let i=count; i >=0; i--){
        console.log(i);
    }
}

function writeCards(name, adjective){
    const string = [];
    for (let i=0; i<name.length; i++){
        string[i]=  `Thank you, ${name[i]}, for the wonderful ${adjective} gift!`;
    }
    return string;  
}