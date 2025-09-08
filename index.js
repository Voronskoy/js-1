// const word = prompt("Input word:");
// console.dir(word);
// console.log(word);

// const wordLenght = word.length;
// const letter = "th";
// console.log(wordLenght);
// if (word.includes(letter)) {
//   console.log(` ${word} has ${letter}`);
// } else {
//   console.log(` ${word} hasn't ${letter}`);
// }

// const wordCapitalize = word[0].toUpperCase() + word.slice(1).toLowerCase();
// console.log(wordCapitalize);

const sentence = "I have white car";
// const countWords = sentence.split(" ").length;

// console.log(countWords);
// const firstletter = sentence
//   .split(" ")
//   .map((word) => word[0].toUpperCase())
//   .join("");
// console.log(firstletter);

// const length = 5;
// let count = 0
// const words = sentence.split(" ").filter((word) => word.length > length).length;
// console.log(words);

const word = "elements";
const letter = "e";
const countLetters = word.split("").filter((ltt) => ltt === letter).length;
console.log(countLetters);
