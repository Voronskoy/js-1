//function declaration

function logWorld(word) {
  console.log(word);
}
logWorld1("test");

// function expression
const logWord2 = function (word) {
  console.log(word);
};
logWord2("new text");

// arrow function
const logWord3 = (word) => {
  console.log(word);
};
logWord3("qwerty");
