// Code your solutions in this file
/*
for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
*/

names = ['bob','sandy']
console.log(writeCards(names,'birthday'))

function writeCards(array, event){
    let messages=[]
    for (let i = 0; i<array.length; i++){
        messages.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
        debugger;
    }
    return messages
}

function countDown(n){
    while (n>=0)
    {console.log(n--)}
}