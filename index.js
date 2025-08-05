/**
 *
 * @param {number} pound
 * @param {number} onePound
 * @returns number
 */
function convertPoundsToKilograms(pound, onePound = 0.453592) {
  return pound * onePound;
}
const weight = convertPoundsToKilograms(42);
// console.log(weight);

function totalSecond(days, hours, minutes) {
  return minutes * 60 + hours * 60 * 60 + days * 24 * 60 * 60;
}
const allSecond = totalSecond(1, 1, 1);
// console.log(allSecond);

function checkTriangle(a, b, c) {
  return a + b > c && b + c > a && a + c > b;
}
// console.log(checkTriangle(3,4,5));

function isTriangle(a, b, c) {
  return a === b && b === c;
}
// console.log(isTriangle(6, 6, 6));
/**
 *
 * @param {number} number1
 * @param {number} number2
 * @param {number} remaind = 5
 * @returns {boolean}
 */
function checkRemaind(number1, number2, remaind = 5) {
  return number1 % remaind === number2 % remaind;
}
// console.log(checkRemaind(24,18,6));

function checkLastDigit(number1, number2) {
  return number1 % 10 === number2 % 10;
}
// console.log(checkLastDigit(104, 144));

function checkSquare(num1, num2) {
  return num1 === num2 * num2 || num2 === num1 * num1;
}
// console.log(checkSquare(1,1));

function summaOdd(min = 1, max = 10) {
  let sum = 0;
  for (let i = min; i <= max; i++) {
    if (i % 2 === 1) {
      sum += i;
    }
  }
  return sum;
}
// console.log(summaOdd(undefined,5));

function culckAdualt(age, adualt = 18) {
  if (age >= adualt) {
    return "you a adult";
  }
  return 'left ' + (adualt - age);
}
console.log(culckAdualt(14));
