// task one _________________________________
const fruits = ['apple', 'orange', 'lemon', 'mango', 'lichi']
console.log(fruits[3]);
fruits[2] = 'Jambura'
console.log(fruits);
console.log('frist is done_________________________');

//task two __________________________________
const destinations = ['Sylhet', 'Rangamati', 'Bandarban']
destinations.push("Cox's Bazar")
destinations.push('Kuakata', 'Sundarban')
destinations.pop()
console.log(destinations);
console.log('second is done_________________________');

//task three _____________________________________
const books = ['Master Your Emotions', 'Eat That Frog', 'Animal Firm', 'Javascript']
let message = `${books.includes('Javascript')}, the mentioned book is included`
console.log(message);
console.log('third is done_________________________');

//task four______________________________________
const age = 23;
const district = 'Bogura';
const isMarried = false;
const skills = ['html', 'css', 'js', 'tailwind'];
const luckyNumbers = [7, 9, 25];
console.log(Array.isArray(age));
console.log(Array.isArray(skills));
console.log(Array.isArray(district));
console.log(Array.isArray(luckyNumbers));
console.log('fourth is done_________________________');

//task five______________________________________