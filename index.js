// const dayWeek = 7;
// if (dayWeek >= 1 && dayWeek <= 5) {
//   console.log("work day");
// } else {
//   console.log("chil day");
// }
// dayWeek >= 1 && dayWeek <= 5
//   ? console.log("work day")
//   : console.log("chil day");
// const result = dayWeek >= 1 && dayWeek <= 5
//   ? "work day"
//   : "chil day";
//   console.log(result);
//   const result2 = dayWeek === 6 || dayWeek === 7 тернарій
//   ? "chil day"
//   : "work day";
//   console.log(result2);

// const timeDay = 13.5;
// const result = timeDay >= 12 && timeDay < 13.5 ? "lunch" : "no lunch";
// console.log(result);

// const gamer1 = "paper";
// const gamer2 = "paper";
// if (gamer1 === gamer2) {
//   console.log("draw");
// } else if (gamer1 === "rock" && gamer2 === "scissors") {
//   console.log(gamer1, "gamer 1!");
// } else if (gamer1 === "scissors" && gamer2 === "rock") {
//   console.log(gamer2, "gamer 2!");
// } else if (gamer1 === "paper" && gamer2 === "rock") {
//   console.log(gamer1, "gamer 1!");
// } else if (gamer1 === "rock" && gamer2 === "paper") {
//   console.log(gamer2, "gamer 2!");
// } else if (gamer1 === "paper" && gamer2 === "scissors") {
//   console.log(gamer2, "gamer 2!");
// } else if (gamer1 === "scissors" && gamer2 === "paper") {
//   console.log(gamer1, "gamer 1!");
// }

// const wheelsCount = 10;
// switch (wheelsCount) {
//   case 1:
//     console.log("monocycle");
//     break;
//   case 2:
//     console.log("bicycle");
//     break;
//   case 4:
//     console.log("automobile");
//     break;
//   case 6:
//     console.log("autobus");
//     break;
//   case 18:
//     console.log("fura ");
//     break;
//   default:
//     console.log("dont know");
//     break;
// }

const userInput = "3";
if (userInput === "admin") {
  console.log("повний доступ");
} else if (userInput === "user") {
  console.log("обмежений доступ");
} else if (userInput === "guest") {
  console.log("тільки перегляд");
} else {
  console.log("невідома роль");
}

switch (userInput) {
  case 'admin':
    console.log('повний доступ');
    break;
  case 'user':
    console.log('обмежений доступ');
    break;
  case 'guest':
    console.log('тільки перегляд');
    break;

  default:
    console.log('невідома роль');
    break;
}