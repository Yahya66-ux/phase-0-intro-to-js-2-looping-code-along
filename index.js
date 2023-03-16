// Code your solutions in this file
function writeCards(names, event){
    let messages = [];
    let thankYouNote = '';
    for(let count = 0; count < names.length; count++){
        thankYouNote = `Thank you, ${names[count]}, for the wonderful ${event} gift!`;
        messages.push(thankYouNote);      
    }
   return messages;
}

function countDown(num){
    for(let count = num; count >= 0; count--){
        console.log(num);
        num -= 1;

    }
}

countDown(10);
