function Game(name, genre, hoursPlayed) {
  this.name = name;
  this.genre = genre;
  this.hoursPlayed = hoursPlayed;
}
function GamePrototype() {
  this.getProgress = function () {
    return `You have played ${this.name} for ${this.hoursPlayed} hours.`;
  };
}
Game.prototype = new GamePrototype();
// const game1 = new Game("Portal", "sandbox", 42);
// console.log(game1.getProgress());
// const game2 = new Game("Roblox", 'sanbox', 83)
// console.log(game2.getProgress());
// console.log(game1.getProgress === game2.getProgress);

function Laptop(brand, ram, storage) {
  this.brand = brand;
  this.ram = ram;
  this.storage = storage;
}
function LaptopPrototype() {
  this.getTotalMemory = function () {
    return this.ram + this.storage;
  };
}
// Laptop.prototype = new LaptopPrototype();
// const laptop1 = new Laptop("asus", 8, 256);
// console.log(laptop1.getTotalMemory());
// const laptop2 = new Laptop('gigabyte', 32, 1024)
// console.log(laptop2.getTotalMemory());

function BikeTrip(distance, avergeSpeed) {
  this.distance = distance;
  this.avergeSpeed = avergeSpeed;
}
function BikeTripPrototype() {
  this.getTripTime = function () {
    return this.distance / this.avergeSpeed;
  };
}
// BikeTrip.prototype = new BikeTripPrototype();
// const bikeTrip1 = new BikeTrip(100, 30);
// console.log(bikeTrip1.getTripTime());
// const bikeTrip2 = new BikeTrip(120, 30);
// console.log(bikeTrip2.getTripTime());

function PlayList(totalSongs, listenSongs) {
  this.totalSongs = totalSongs;
  this.listenSongs = listenSongs;
}
function PlayListPrototype() {
  this.getListenSongsPercent = function () {
    return (this.listenSongs * 100) / this.totalSongs;
  };
  this.getRestSongsPercent = function () {
    return 100 - this.getListenSongsPercent();
  };
}
// PlayList.prototype = new PlayListPrototype();
// const playList1 = new PlayList(540, 539);
// console.log(playList1.getListenSongsPercent());
// console.log(playList1.getRestSongsPercent());

const device = { isBattery: true };
const phone = { brand: "apple" };
phone.__proto__ = device;
// console.log(phone.isBattery);
// console.log(phone.brand);

const grandPa = { isHouse: true, lastName: "Jex", sayHi(){return 'hi!'} };
const father = { __proto__: grandPa, isCar: true };
const son = { __proto__: father };
console.log(father.isHouse, father.lastName);
console.log(son.isHouse, son.lastName, son.isCar, son.sayHi());
