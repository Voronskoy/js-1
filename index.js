// let amountPlate = 0;
// const totalAmountPlate = 5;

// // while (amountPlate > 0) {
// //     console.log('washing plate', amountPlate);
// //     amountPlate--; // decrement
// // }

// while (amountPlate < totalAmountPlate) {
//     amountPlate++;
//     console.log('washing plate', amountPlate);
// }


// while (true) {
//     const userInput = prompt('enter number 77');
//     if (userInput === '77') {
//         alert('thanks');
//         break;
//     }
// }

// запитувати в користувача ввести число кратне 7 до тих пір, доки він не введе правильно
// число % 7 === 0 -> break

// while (true) {
//   const userInput = prompt('enter number multiply 7');
//   const userNumber = Number(userInput);
//   if (userNumber % 7 === 0 && userInput !== '' && userInput !== null) {
//     alert('thanks');
//     break;
//   }
// }


// while (true) {
//   const userInput = prompt('Enter something');

//   if (userInput !== '' && userInput !== null) {
//     alert('thanks');
//     break;
//   }
// }

const secretNumber = 4;

while (true) {
  const userInput = prompt('Enter number');
  const userNumber = Number(userInput);

  if (userInput === null || userInput.trim() === '' || Number.isNaN(userNumber)) {
    alert('Error! Enter a valid number');
  } else if (userNumber === secretNumber) {
    alert('You win!');
    break;
  } else if (userNumber > secretNumber) {
    alert('Secret number is less');
  } else {
    alert('Secret number is bigger');
  }
}
