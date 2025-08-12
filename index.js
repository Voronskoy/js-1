const game1 = {
  name: "Portal",
  genre: "advenche",
  hoursPlayed: 75,
  getProgress() {
    return `You have played ${this.name} for ${this.hoursPlayed} hours.`;
  },
};
function Game(name, genre, hoursPlayed) {
  this.name = name;
  this.genre = genre;
  this.hoursPlayed = hoursPlayed;
  this.getProgress = function () {
    return `You have played ${this.name} for ${this.hoursPlayed} hours.`;
  };
}

// const game2 = new Game('Roblox',"sandbox",56);
// console.log(game1.getProgress());
// console.log(game2.getProgress());
// const game3 = new Game('Minecraft',"sandbox",944)
// console.log(game3.getProgress());

function Laptop(brand, ram, storage) {
  this.brand = brand;
  this.ram = ram;
  this.storage = storage;
  this.getTotalMemory = function () {
    return this.ram + this.storage;
  };
}
// const laptop1 = new Laptop('Aser', 16, 512)
// console.log(laptop1.getTotalMemory());

const circle1 = {
  radius: 45,
  getPerimeter() {
    return 2 * 3.14 * this.radius;
  },
  getArea() {
    return 3.14 * this.radius;
  },
};

function Circle(radius) {
  this.radius = radius;
  this.getPerimeter = function () {
    return 2 * 3.14 * this.radius;
  };
  this.getArea = function () {
    return 3.14 * this.radius;
  };
}

// const circle2 = new Circle(56);
// console.log(circle1.getPerimeter());
// console.log(circle1.getArea());
// console.log(circle2.getPerimeter());
// console.log(circle2.getArea());

function GameLevel(totalEnemies, defeatedEnemies) {
  this.totalEnemies = totalEnemies;
  this.defeatedEnemies = defeatedEnemies;
  this.getCompletionPercent = function () {
    return (this.defeatedEnemies * 100) / this.totalEnemies;
  };
}
// const gameLevel1 = new GameLevel(570,56);
// console.log(gameLevel1.getCompletionPercent());



const streamingService = {
    monthlyPrice: 7,
    monthsSubscribed: 10,
    getTotalCost(){
        return this.monthlyPrice * this.monthsSubscribed;
    }
} 
// console.log(streamingService.getTotalCost());


function PhoneStorage(totalStorage, usedStorage){
    this.totalStorage = totalStorage,
    this.usedStorage = usedStorage,
    this.getFreeSpace = function()  {
        return `Free storage:${this.totalStorage - this.usedStorage}`;
    }
    this.getFreeSpacePercent = function()  {
        return `Free storage is Percent:${(this.totalStorage - this.usedStorage)*100/this.totalStorage}`;
    }
} 
const phoneStorage1 = new PhoneStorage(128,90);
console.log(phoneStorage1.getFreeSpace());
console.log(phoneStorage1.getFreeSpacePercent());

