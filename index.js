function User(name, age, isMale) {
  this.name = name;
  this.age = age;
  this.isMale = isMale;
}
function UserPrototype() {
  this.getName = function () {
    return this.name;
  };
  this.getInfo = function () {
    return `${this.name} is ${this.age} years old`;
  };
  this.getGender = function () {
    return this.isMale ? "male" : "female";
  };
}

User.prototype = new UserPrototype();
// const user1 = new User('Alex', 20, true);
// console.log(user1);
// console.log(user1.getInfo());
// console.log(user1.getGender());
// console.log(user1.getName());

/**
 *
 * @param {number}
 */

function Circle(radius) {
  this.radius = radius;
}
function CirclePrototype() {
    this.getArea = function () {
    return Math.PI * this.radius * this.radius;
  };
  this.getPerimetr = function () {
    return 2 * Math.PI * this.radius;
  };
  this.getDiametr = function () {
    return 2 * this.radius;
  };
}
Circle.prototype = new CirclePrototype();

const result = new Circle(3);
console.log(result.getArea());
console.log(result.getPerimetr());
console.log(result.getDiametr());
