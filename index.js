// const travelKm = prompt('how kilometrs travel?');// 300
// const gasLeft100Km = prompt("how gas left 100 km?")// 6
// if (confirm("Do you want made calc?")) {
//     const calcGasTotal = (travelKm / 100) * gasLeft100Km;
//     alert('all gas ' +calcGasTotal);
// } else {
//     alert(":(");
// }

// const pagesBook = prompt("how pages have your book?");
// const pagesInDay = prompt("how pages you read everyday?");
// if (confirm("Do you want made calc?")) {
//   const daysReadBook = pagesBook / pagesInDay;
//   alert("Days for this book: " + daysReadBook);
// } else {
//   alert(":(");
// }

const SUGER_GRAMMS_IN_TEA_SPOON = 5;
const DAYS_IN_WEEK = 7;
const sugarTeaSpoonInCup = prompt("how tea spoon sugar have your cap?");
const capInDay = prompt("how cap you drink in day?");
if (confirm("Do you want made calc?")) {
  const sugarGrammsInWeek =
    sugarTeaSpoonInCup * capInDay * SUGER_GRAMMS_IN_TEA_SPOON * DAYS_IN_WEEK;
  alert("Sugar In Week: " + sugarGrammsInWeek);
} else {
  alert(":(");
}
