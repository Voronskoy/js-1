// const priceTicket = 100;

// const userAgeInput = prompt('Enter your age');
// const userAge = Number(userAgeInput);

// const sale = (userAge < 18 || userAge > 65) ? 10 : 0;

// const summaCheck = priceTicket - (priceTicket * sale / 100);
// alert(summaCheck);


// Запитайте у користувача число
// За допомогою тернарного оператора обчисліть модуль цього числа

// const userInput = prompt('Enter number');
// const number = Number(userInput);
// const module = number >= 0 ? number : -number;
// alert(module);



const userInput1 = prompt('Enter side 1');
const userInput2 = prompt('Enter side 2');

const titleFigure = userInput1 === userInput2 ? 'квадрат' : 'прямокутник';

alert(titleFigure);
