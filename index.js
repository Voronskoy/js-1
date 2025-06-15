// const accessAge = 12;
// const userAge = prompt('Скільки вам років?');

// if (Number(userAge) >= accessAge) {
//   alert('Ви можете купляти квиток');
// } else {
//   const yearWait = accessAge - Number(userAge);
//   alert('Треба ще почекати років: ' + yearWait);
// }

const num1 = prompt('Enter first number'); // string
const num2 = prompt('Enter second number'); // string

if (num1 > num2) { // 3 > 3 false
  alert(num1 + ' - bigest');
} else if (num2 > num1) { // 3 > 3 false
  alert(num2 + ' - bigest');
} else {
  alert('Equal');
}
