// const numbers = [1, 2, 3, 4, 5, 6, 7]
// console.log(numbers);
// const reversed = [];
// for (let number of numbers) {
//     reversed.unshift(number)
// }
// console.log(reversed);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// let arrReversed = [];
// for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     arrReversed.unshift(item)
// }
// console.log(arr);
// console.log(arrReversed);
// const colors = ['red', 'blue', 'areen', 'yellow', 'orange'];
// const sortedColors = colors.sort();
// console.log(colors);
// console.log(sortedColors);
//++++++++++++++Array Methods++++++++++++++
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// const string = fruits.toString()
// console.log(string.split(','));
// const arr = [1, 2, 3, 4, 5, 6, 7];
// let sum = 0;
// for (let element of arr) {
//     sum += element
// }
// console.log(sum);
// const arr = [1, 2, 30, 14, 35, 6, 7];
// let max = 0;
// for (let element of arr) {
//     if (element > max) {
//         max = element;
//     }
// }
// console.log(max);
// const text = 'how many vowels are existed here aAAA';
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// let totalVowels = 0;
// for (let char of text.toLowerCase()) {
//     if (vowels.includes(char)) {
//         totalVowels++;
//     }
// }
// console.log(totalVowels);
// const productPrice = {
//     banan: 250,
//     orange: 200,
//     lemon: 30,
//     egg: 48,
//     chickpeas: 85,
//     paste: 7,
// }
// let totalPrice = 0;
// for (let prop in productPrice) {
//     totalPrice += productPrice[prop];
// }
// console.log(totalPrice);
// for (let i = 1; i <= 100; i++) {
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

// const arr = [55, 46, 84, 55, 86, 46, 55, 55, 5, 5,]
// let count = 0;
// for (let element of arr) {
//     if (element === 5) {
//         count++;
//     }
// }
// console.log(count);
//++++++++++problem 9+++++++++++
const productPrice = {
    banan: 250,
    orange: 200,
    lemon: 30,
    egg: 48,
    chickpeas: 85,
    paste: 7,
}
console.log(productPrice.hasOwnProperty('paste'));
//++++++++++problem 10+++++++++++
const text = 'capitalized each word in a string';
const textArr = text.split(' ')
let textCapitalized = '';
for (let word of textArr) {
    textCapitalized += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
}
console.log(text);
console.log(textCapitalized);
