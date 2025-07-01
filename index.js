// const MIN_NUMBER = 10;
// const MAX_NUMBER = 100;
// const userInput = prompt("Enter number:");
// if (Number(userInput) >= MIN_NUMBER && Number(userInput) <= MAX_NUMBER  ) {
//   alert(":)");
// } else {
//   alert(":(");
// }
// if (!(Number(userInput) >= MIN_NUMBER && Number(userInput) <= MAX_NUMBER  )) {
//   alert(":(");
// } else {
//   alert(":)");
// }
// if (Number(userInput) < MIN_NUMBER || Number(userInput) > MAX_NUMBER  ) {
//   alert(":(");
// } else {
//   alert(":)");
// }

// const ROLE_ADMIN = "admin";
// const PWD_ADMIN = "123";
// const userInputName = prompt("enter username:");
// const userInputPwd = prompt("enter password:");
// if (userInputName === ROLE_ADMIN && userInputPwd === PWD_ADMIN) {
//   alert("Hi admin");
// } else {
//   alert("Hi user");
// }
// if (userInputName !== ROLE_ADMIN || userInputPwd !== PWD_ADMIN) {
//   alert("Hi user");
// } else {
//   alert("Hi admin");
// }

const userInput1 = prompt("enter username:");
const userInput2 = prompt("enter username:");
if (userInput1 === userInput2) {
  alert(":)");
} else {
  alert(":(");
}
if (userInput1 !== userInput2) {
  alert(":(");
} else {
  alert(":)");
}
const result1 = userInput1 === userInput2 ? ";)" : ":(";
alert(result1);
