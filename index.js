// №1
function isCentenaryYear(year = 2024) {
  return year % 100 === 0;
}

// console.log(isCentenaryYear(3900));

// №2
const ZERO_FAHRENHEIT = 32;
const KOEF_CELSIUS_FAHRENHEIT = 9 / 5;
const DAY_WEEK = 7;

function convertCelsiusFahrenheit(celsius) {
  return celsius * KOEF_CELSIUS_FAHRENHEIT + ZERO_FAHRENHEIT;
}

// console.log(convertCelsiusFahrenheit(55));

// №3
function isMultiple(Number1, Number2) {
  return Number1 % Number2 === 0;
}
// console.log(isMultiple(4, 5));

// №4
function getAreaTringle(basis, height) {
  return (basis * height) / 2;
}
// console.log(getAreaTringle(7.5, 9));

// №5
function summaGoods(summa, procents = 20) {
  const pdv = (summa * procents) / 100;
  return summa + pdv;
}
// console.log(summaGoods(10));

// №6
function isEvenDifferenceBetweenNumbers(number1, number2) {
  return (number1 - number2) % 2 === 0;
}
// console.log(isEvenDifferenceBetweenNumbers(10, 10));

// №7
const INCH_SM = 2.54;
function convertInchToSm(inch) {
  return inch * INCH_SM;
}
console.log(convertInchToSm(10));