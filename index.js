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

while (true) {
    const userInput = prompt('enter number multiply 7');
    const userNumber = Number(userInput);
    if (userNumber % 7 === 0) {
        alert('thanks');
        break;
    }
}
