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
//     if ((i % 3 === 0) || (i % 5 === 0)) {
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
// const productPrice = {
//     banan: 250,
//     orange: 200,
//     lemon: 30,
//     egg: 48,
//     chickpeas: 85,
//     paste: 7,
// }
// console.log(productPrice.hasOwnProperty('paste'));
// //++++++++++problem 10+++++++++++
// const text = 'capitalized each word in a string';
// const textArr = text.split(' ')
// let textCapitalized = '';
// for (let word of textArr) {
//     textCapitalized += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
// }
// console.log(textCapitalized);



//_________Five More________
//number one---------
// const arr = [10, 20, 30];
// let arrTotal = 0;
// for (let i of arr) {
//     arrTotal += i;
// }
// console.log(arrTotal / arr.length);

// //number two---------solved
// const num = [55, 46, 84, 55, 86, 46, 55, 55, 5, 5,];
// let uniqueNum = [];
// for (let element of num) {
//     if (!uniqueNum.includes(element)) {
//         uniqueNum.push(element)
//     }
// }
// console.log(num);
// console.log(uniqueNum);

// //number three ----------
// const text = 'capitalized each word in a string';
// const occurrence = {};
// for (let i of text) {
//     if (occurrence[i]) {
//         occurrence[i]++;
//     } else { occurrence[i] = 1 }
// }
// console.log(occurrence);

// //number four-------
// const numbers = [-550, 46, 84, -55, 86, -46, 55, 55, 5, 5,];
// let smallNumber = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < smallNumber) {
//         smallNumber = numbers[i];
//     }
// }
// console.log(smallNumber);

// //number five-------
// const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let evenNumber = 0;
// for (let i of numbers2) {
//     if (i % 2 === 0) {
//         evenNumber += i;
//     }
// }
// console.log(evenNumber);

//________CONCEPTUAL SESSION_________
// const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const numbers3 = [5, 6, 7, 8, 9];
// const numbers4 = [5, 6, 7, 8, 9];
// const numbers5 = [5, 6, 7, 8, 9];
// console.log(numbers2.concat(numbers2));

// const text = "full stack developer"
// console.log(text.indexOf('x'));
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.join(','));


//______________module 21________________

// function square(number, number2) {
//     const result = number * number2;
//     return result;
// }
// const man = square(5);
// console.log(man);

// function num(value) {
//     return value
// }
// function add(number) {
//     console.log(number + 5);
// }
// add(num(5))

// function getMenu() {
//     // console.log("Burger, Pizza, Pasta");
//     // return;
// }
// const result = getMenu()
// console.log(result);

//______________TapaScript Youtube________________

// function normalFunc() { //this is usual function
//     console.log('normal function');
// }

// const myFunc = function () {  //this is function as expression
//     console.log('function as expression');
// }

// const func = () => {  //arrow function
//     console.log('this is an arrow');
// }

// normalFunc();
// myFunc();
// func();

// function myName(fName, lName) {
//     let fullName = `my full name is ${fName} ${lName}`;
//     console.log(fullName);
//     return fullName
// }
// console.log(myName());

// function getMenu() {
//     console.log('pzza', 'burger');
// }
// const result = getMenu();
// console.log(result);

// let w = 60;
// while (w <= 100) {
//     w++;
//     if ((w % 2) === 0) {
//         continue;
//     }
//     console.log(w);
// }


//______________module 22________________
// function oddAvg(fullArr) {
//     let oddtotal = 0;
//     let leng = 0;
//     for (let i of fullArr) {
//         if (i % 2 !== 0) {
//             oddtotal += i;
//             leng++
//         }
//     }
//     return oddtotal / leng;
// }
// const fullArr = [1, 3, 7, 9, 5];
// const result = oddAvg(fullArr);
// console.log(result);


function remDupli(dupArr) {
    let singArr = [];
    for (let i of dupArr) {
        if (singArr.includes(i)) {
            continue;
        } else {
            singArr.push(i)
        }
    }
    return singArr;
}

const fullArr = ['imran', 'rimon', 'imran', 'iran'];
const result = remDupli(fullArr);
console.log(result);