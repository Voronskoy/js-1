// const start = 15;
// const end = 20;
// const secretNumber = 17;

// for (let i = start; i < end; i++) {
//     if (i === secretNumber) {
//         continue;
//         alert('after continue');
//     }
//     console.log(i);
// }

// debugger;
// while (true) {
//     const userInput = prompt('Enter number');
    
//     if (userInput === null) {
//         alert('будь уважний!');
//         continue;
//     }

//     if (Number(userInput) === secretNumber) {
//         alert('Win!');
//         break;
//     }
// }
 
const number1 = 2;
const number2 = 7;
const result = number1 * number2;

while (true) {
    const userInput = prompt(`скільки буде ${number1} * ${number2}?`);

    if (userInput === null || userInput.trim() === '') {
        alert('будь уважний!');
        continue;
    }

    if (Number(userInput) === result) {
        alert('Win! відповідь = ' + result);
        break;
    }

    alert('Спробуй ще!');
}
