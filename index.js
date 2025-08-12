function User(name, age) {
  this.name = name;
  this.age = age;
  this.getInfo = function () {
    return `${this.name} is ${this.age} years old`;
  };
}

const user1 = new User("Fred", 12);
console.log(user1.getInfo());
const user2 = new User("Anna", 15);
console.log(user2.getInfo());

function Phone(brand, model, price) {
  this.brand = 'Google';
  this.price = 19000;
  this.model ='pixel 6 pro';
  this.getDeteils = function () {
    return `${this.brand}, ${this.model}, ${this.price}`;
  };
}

const phone1 = new Phone();
console.log(phone1.getDeteils());

const phone2 = new Phone("Sony")
console.log(phone2.getDeteils());
