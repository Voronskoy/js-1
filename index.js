// користувач вводить початкове значеня - число
// потім він вводить знаки або + або -
// ми залежно від цих знаків робимо інкремент або дікремент
// це все продовжуються до того доки користувач не натисне відміну

// const userInput = prompt("Enter number:");
// let userNumber = Number(userInput);
// while (true) {
//   const userInput2 = prompt("Enter +/-:");

//   if (userInput2 === null) {
//     break;
//   } else if (userInput2 === "+") {
//     userNumber++;
//   } else if (userInput2 === "-") {
//     userNumber--;
//   } else {
//     alert("error");
//   }
// }
// alert(userNumber);

// for (let i = 3; i <= 9; i++) {
//   console.log(i, "->", i * i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 4 === 0) {
//     console.log("***");
//   } else if (i % 6 === 0) {
//     console.log("$$$");
//   } else {
//     console.log(i);
//   }
// }
let count = 0;
while (count < 3) {
  const userInput = prompt("enter number:");
  if (Number(userInput) % 7 === 0) {
    count++;
    console.log(count, userInput);
  }
}
