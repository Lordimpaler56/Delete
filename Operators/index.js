function simpleOperators (numberA, numberB){
  let adding = numberA + numberB;
  let subtract = numberA - numberB;
  let mutliply = numberA * numberB;
  let divide = numberA / numberB;
  console.log(adding);
  console.log(subtract);
  console.log(mutliply);
  console.log(divide);
}

function skipCounting (skipCount, times, startingNumber){
  let number = startingNumber - skipCount;
  for (let i=1; i<=times; i++){
  console.log(number);
  number += 5;

  }
}

function howManyTimes (numberStart, numberEnd, skipCount) {
while (numberStart < numberEnd) {
console.log(numberStart);
numberStart += skipCount;
 }
}
//Breaks while loop into zero loop
console.log(1 == 1);
console.log('1' == 1);
console.log('1' === 1);

let number = [4, 7, 13, 99, 0, 100, 5];
//simpleOperators (number[2], number[3]);
//skipCounting(3, 6, 113);
howManyTimes (0, 100, 5)
