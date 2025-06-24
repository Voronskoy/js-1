// // const dayWeek = prompt("Number of day week:");
// // if (Number(dayWeek) === 6) {
// //   alert("wow!");
// // } else if (Number(dayWeek) === 7) {
// //   alert("wow!");
// // } else {
// //   alert(":(");
// // }

// const secretNumber = 42;
// const userInput = prompt("Enter number:");
// if (Number(userInput) === secretNumber) {
//   alert("WOW!!!");
// } else if (Number(userInput) < secretNumber) {
//   alert(" Your number less(");
// } else {
//   alert("Your number hight");
// }

// const nameUser1 = prompt("Enter your name:");
// const nameUser2 = prompt("Enter your name:");
// if (nameUser1 === nameUser2) {
//   alert("Hi namesake");
// } else {
//   alert("hi");
// }

// const userSize = prompt("Enter your size:", 36);
// const size = Number(userSize);
// if (size === 36) {
//   alert("Your size S");
// } else if (size === 38) {
//   alert("Your size M");
// } else if (size === 40) {
//   alert("Your size L");
// } else {
//   alert(":(");
// }

// let userAge1 = prompt("Your age?");
// let userAge2 = prompt("Your age?");
// userAge1 = Number(userAge1);
// userAge2 = Number(userAge2);
// if (userAge1 === userAge2) {
//   alert("We peers");
// } else if (userAge1 < userAge2) {
//   alert("oldest second user");
// } else {
//   alert("oldest first user");
// }

let totalVolume = prompt("Enter total Volume");
let currentVolume = prompt("Enter current volume");
totalVolume = Number(totalVolume);
currentVolume = Number(currentVolume);
if (currentVolume < 0) {
  alert("impossible");
} else if (currentVolume === 0) {
  alert("empty");
} else if (currentVolume < totalVolume / 2) {
  alert("less then half");
} else if (currentVolume === totalVolume / 2) {
  alert("half");
} else if (currentVolume < totalVolume) {
  alert("biggest then half");
} else if (currentVolume === totalVolume) {
  alert("full");
} else {
  alert("impossible");
}
