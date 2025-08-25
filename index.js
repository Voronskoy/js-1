// Створюємо масив імен друзів
const names = [];
console.log(`Довжина масиву: ${names.length}`);

// Додаємо елементи в кінець масиву
names.push('Anna', 'Olga');
console.log('Після додавання в кінець:', names);

// Додаємо елементи на початок масиву
names.unshift('Max', 'Fred');
console.log('Після додавання на початок:', names);

// Видаляємо елемент з кінця масиву
const lastName = names.pop();
console.log(`Видалений з кінця: ${lastName}`);
console.log('Масив після видалення з кінця:', names);

// Повертаємо видалений елемент на початок
names.unshift(lastName);
console.log('Після повернення на початок:', names);

// Видаляємо елемент з початку масиву
const firstName = names.shift();
console.log(`Видалений з початку: ${firstName}`);
console.log('Масив після видалення з початку:', names);






const fruits = [];

console.log(fruits.length);

fruits.push('яблуко', 'мандарин', 'кокос');
fruits.unshift('манго', 'банан');

const orange = fruits.pop();
const banana = fruits.pop();

const addFruit1 = fruits.unshift(orange);
const addFruit2 = fruits.unshift(banana);

console.log(fruits);
