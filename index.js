// const yearCheck = 2000;
// const birthYear = prompt("Ваш рік народження?");
// // if (Number(birthYear) < yearCheck) {
// //   alert("Ви народилися в минулому тисячолітті");
// // } else {
// //   alert("Ви з 3-ого тисячолітті");
// // }
// if (Number(birthYear) >= yearCheck) {
//   alert("Ви з 3-ого тисячолітті");
// } else {
//   alert("Ви народилися в минулому тисячолітті");
// }

// const userInput = prompt("Введіть Так/Ні");
// // if (userInput === "Так") {
// //   alert(";)");
// // } else {
// //   if (userInput === "Ні") {
// //     alert(":(");
// //   } else {
// //     alert("???");
// //   }
// // }
// if (userInput === "Так") {
//   alert(";)");
// } else if (userInput === "Ні") {
//   alert(":(");
// } else {
//   alert("???");
// }

// const speedUser = prompt('Ваша швидкість?');
// if (Number(speedUser) > 120) {
//   alert('Штраф!');
// } else if(Number(speedUser) >= 60){
//   alert('Normal');
// }
// else{
// alert('можна швидше!');
// }

const chargeLevel = prompt("Ваш заряд на телефоні?");
const chargeNumber = Number(chargeLevel);
// if (Number(chargeLevel) > 80) {
//   alert("full");
// } else if (Number(chargeLevel) >= 30) {
//   alert("normal");
// } else {
//   alert("urgent charges");
// }
if (chargeNumber > 100) {
  alert("it i imposible");
} else if (chargeNumber > 80) {
  alert("full");
} else if (chargeNumber >= 30) {
  alert("normal");
} else if (chargeNumber > 0) {
  alert("urgent charges");
} else {
  alert("rip");
}
