const userName = prompt("Ведіть ваше і\'мя");
alert('Hi!, ' + userName + '!');

const currentYear = new Date().getFullYear();
console.log(currentYear);

const userYearBD = prompt("Введіть ваш вік");
const userAge = currentYear - userYearBD; 
alert(userName + ',' +'Your year is, ' + userAge + '!');


const throw10Year = currentYear + 10;
const userAgeThrow10Year = throw10Year - userYearBD;
alert(userName + ',' + 'a через 10 років вам буде' + userAgeThrow10Year + '!')
