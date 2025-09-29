// const numbers = [1, 2, 3, 4, 5, 1, 2];
// const uniqNumbers = new Set(numbers);
// console.log(uniqNumbers);
// console.log(numbers);
// console.log(uniqNumbers.size);
// const numbers2 = [1, 1, 2, 7, 5, 6];
// const merged = [...numbers,...numbers2]
// const uniqNumbers2 = new Set(merged);
// console.log(uniqNumbers2);
// console.log(merged);

// const userLevel = new Map([
//   ["Alex", "a1"],
//   ["Bob", "a2"],
// ]);
// console.log(userLevel);
// console.log(userLevel.get('Alex'));
// userLevel.set('Vlad', 'a3');

class Message {
  #text;
  constructor(text) {
    this.text = text;
  }
  set text(value) {
    if (typeof value !== "string") {
      throw new TypeError("value must be string");
    }
    if (value === "") {
      throw new RangeError("string not be empty");
    }
    this.#text = value;
  }
  get text() {
    return this.#text;
  }
  showMessageUpearcase() {
    return this.text.toUpperCase();
  }
}
try {
  const message1 = new Message("");
  console.log(message1.text);
  console.log(message1.showMessageUpearcase());
} catch (error) {
  console.log(error);
}
