const numbers = [2, 7, 10, 15, 25, 42];
let count = 0;
// numbers.forEach((number) => {
//   if (number < 20) {
//     count++
//   };
// });
// console.log(count);

// numbers.forEach((number) => {
//   if (number % 2 === 0) {
//     count++;
//   }
// });
// console.log(count);

// numbers.forEach((number) => {
//   if (number % 2 === 1) {
//     console.log(number);
//     ;
//   }
// });

// numbers.forEach((number) => {
//   if (number % 3 === 0) {
//     console.log(number);
//   }
// });

// let newNumbers = numbers.map((number) => number + 3);
// console.log(newNumbers);

// let newNumbers = numbers.map((number) => {
//   if (number % 2 === 0) {
//     return number / 2;
//   }
//   return number - 1;
// });

// const newNumbers = numbers.map((number) =>
//   number % 2 === 0 ? number / 2 : number - 1
// );

// console.log(numbers);
// console.log(newNumbers);

const summa = numbers.reduce((accum, number) => accum + number, 0);
console.log(summa);
const average = summa / numbers.length;
console.log(average);

const numbersLessAverage = numbers.filter((number) => number < average);
console.log(numbersLessAverage);


const newNumbers = numbers.filter((number) => number % 8 === 0);
console.log(newNumbers);
console.log(numbers);

