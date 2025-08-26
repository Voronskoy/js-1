// const games = ['Roblox', 'Minecraft'];
// console.log(games);
// games.push('GTA');
// console.log(games);
// const firstElem = games.shift();
// games.push(firstElem);
// console.log(games);
// const newGame = 'Need For Speed'
// if(games.includes(newGame) === false){
//     games.unshift(newGame);
// }
// console.log(games);
// const position = games.indexOf('GTA')
// console.log(position);
// games.splice(position+1, 0, 'GTA5', 'GTA6')
// console.log(games);

// const cars = ["audi", "bmw"];
// const userInput = prompt("Enter your Car:");
// if (cars.includes(userInput)) {
//   alert("вже є  масиві");
// } else {
//   cars.push(userInput);
// }
// console.log(cars);

// const lastCar = cars.pop();
// cars.unshift(lastCar);
// console.log(cars);

// const positionBmw = cars.indexOf("bmw");
// cars.splice(positionBmw, 0, "Tesla");
// console.log(cars);

// const cleerAudi = cars.indexOf("audi");
// cars.splice(cleerAudi, 1);
// console.log(cars);

const backpack = ["notebook", "pen", "bottle", "charger"];
const posBottle = backpack.indexOf("bottle");
backpack.splice(posBottle, 1);
console.log(backpack);
const posNotebook = backpack.indexOf("notebook");
backpack.splice(posNotebook + 1, 0, "PowerBank");
console.log(backpack);
backpack.push("Pencel");
console.log(backpack);
if (backpack.includes("notebook")) {
  backpack.unshift("tablet");
} else {
    backpack.push("tablet");
}
console.log(backpack);
const posPen = backpack.indexOf('pen');
const pen = backpack.splice(posPen, 1);
console.log(pen[0]) ;
backpack.unshift(pen[0]);
console.log(backpack);