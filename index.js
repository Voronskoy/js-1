// const userInput = prompt("Enter first number:");
// const userInput2 = prompt("Enter second number:");

// const input = Number(userInput);
// const input2 = Number(userInput2);

// if (input > 0 && input2 > 0) {
//   alert("like");
// } else if (input < 0 && input2 < 0) {
//   alert("dislike");
// } else {
//   alert('no like no dislike');
// }


const summa = prompt('Enter summa');
const minSumma = 1000;

// (condition) ? true_value : false_value
const delivery = (Number(summa) >= minSumma) ? 0 : 50;

// Альтернатива з if:
// if (Number(summa) > minSumma) {
//     delivery = 0;
// } else {
//     delivery = 50;
// }

alert('До сплати = ' + (Number(summa) + delivery));

const number = prompt('Enter number');
// even       odd
let wordEvenOdd = (Number(number)%2 === 0) ? 'even' : 'odd';

alert(number + ' - ' + wordEvenOdd);
