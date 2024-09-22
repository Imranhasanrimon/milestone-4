//______________Js object_______________
//task one--------
const colors = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    'golden rod': '#daa520'
}
console.log(colors['golden rod']);

//task two--------
const car = {
    make: 'toyota',
    model: 'corolla',
    year: 2020
}
car['passenger capacity'] = 5;
console.log(car);

//task three--------
const student = {
    name: 'Hamim Sakib',
    id: 5421,
    physics: {
        subject: 'HSC physics',
        author: 'shahjahan Tapan',
        marks: 30
    }
}
console.log(student.physics.marks);

//task four--------
let student2 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
console.log(Object.keys(student2).length);
// or 
let propNumber = [];
for (let prop in student2) {
    propNumber.push(prop)
}
console.log(propNumber.length);

//task five--------
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}
for (let prop in myObject) {
    console.log('Key: ', prop, '| type: ', typeof myObject[prop]);
}
console.log('_________end__________');


//______________Js string_______________
//task one--------
let text = 'this is an apple in a box';
let count = 0;
for (let i = 0; i < text.length; i++) {
    if (text[i] === 'a') {
        count++;
    }
}
console.log(count);
//or
let count2 = text.split('a').length - 1;
console.log(count2);

//task two--------
let text2 = 'I\'d like to get a job in American software company'
let aA = 0;
for (let i = 0; i < text2.length; i++) {
    if (text2[i] === 'a' || text2[i] === 'A') {
        aA++;
    }
}
console.log(aA);

//task three--------
const comment = 'full stack web development is my dream from child';











//task four--------
let task4 = 'x is not X, and y isn\'t Y'
let replace = task4.replace(/x/g, 'y').replace(/X/g, 'Y').replace(/y/g, 'x').replace(/Y/g, 'X')
console.log(task4);
console.log(replace);

//task five--------
let task5 = "I will be able to perform well";
let word = task5.split(' ')
let capitalized = '';
for (let i = 0; i < word.length; i++) {
    capitalized += word[i].charAt(0).toUpperCase() + word[i].slice(1) + ' '
}
console.log(capitalized);


// const fullArr = ['imran', 'rimon', 'imran', 'iran'];
// const result = remDupli(fullArr);
// console.log(result);

// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 100);
// }

// const d = new Date();
// console.log(d);
// const D = new Date("2022-03-25");
// console.log(D);

//______________module 23________________
// function maxNum(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return num1;
//     } else if (num2 > num1 && num2 > num3) {
//         return num2
//     } else {
//         return num3
//     }
// }
// console.log(maxNum(12, 15, 20));


// function maxNum(one, two, three) {
//     let biggestNum = 0;
//     if (one > biggestNum) {
//         biggestNum = one;
//     } else if (two > biggestNum) {
//         biggestNum = two;
//     } else (biggestNum = three)
//     return biggestNum
// }
// console.log(maxNum(25, 53, 2));
// function smallNumber(num) {
//     smallNumber = num[0];
//     for (let i of num) {
//         if (i < smallNumber) {
//             smallNumber = i;
//         }
//     }
//     return smallNumber
// }
// const numbers = [12, 9, 50, 41, 23, 78, 46];
// console.log(smallNumber(numbers));

// const phones = [
//     { name: 'oppo', price: 18000, color: 'white' },
//     { name: 'iphon', price: 35000, color: 'white' },
//     { name: 'samsung', price: 20000, color: 'white' },
//     { name: 'motorolla', price: 30000, color: 'white' },
//     { name: 'xiomi', price: 25000, color: 'white' }
// ]
// let chipestPhone = phones[0].price
// for (let i of phones) {
//     if (i.price > chipestPhone) {
//         chipestPhone = i.price;
//     }
// }
// console.log(chipestPhone);

// const products = [
//     { quantity: 2, name: 'shampoo', price: 100 },
//     { quantity: 7, name: 'shirt', price: 200 },
//     { quantity: 3, name: 'shampoo', price: 50 },
//     { quantity: 2, name: 'pant', price: 100 },
// ]
// let totalPrice = 0;
// for (let i of products) {
//     totalPrice += i.price * i.quantity
// }
// console.log(totalPrice);

// ___________Conceptual Session 03__________________
// const person = {
//     name: 'mehedy',
//     address: 'rajshahi'
// }
// function makeEmail(info) {
//     const output = info.name + '@' + info.address + '.com';
//     return output;
// }
// console.log(makeEmail(person));

// function checkBoolean(array) {
//     if (!Array.isArray(array)) {
//         return 'this is not an array';
//     }
//     let count = 0;
//     for (let i of array) {
//         if (typeof i === 'boolean') {
//             count++;
//         }
//     }
//     return count;
// }


// const friends = [20, true, 50, false, true, false, undefined, false, 'rashed'];

// console.log(checkBoolean(friends));

// function totalRiksawCost(passengerNumb) {
//     if (typeof passengerNumb !== 'number') {
//         return 'Invalid Input';
//     }
//     const bus = 50;
//     const micro = 15;
//     const rikshawCost = 20;

//     const afterBus = passengerNumb % bus;
//     const afterMicro = afterBus % micro;
//     const totalRikshawCost = rikshawCost * afterMicro;

//     return totalRikshawCost;
// }

// console.log(totalRiksawCost(234));

// const person = {
//     name: 'mehedy',
//     address: 'rajshahi'
// }
// person['age'] = 23;
// console.log(person);

// function countVowels(text) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     let char = '';
//     for (let i of text) {
//         if (vowels.includes(i.toLowerCase())) {
//             count++;
//             char += i;
//         }
//     }
//     return `${count} ${char}`;
// }
// console.log(countVowels('IAfs;alkmran'));

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     }
//     else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

// const vowels = ['a', 'e', 'i', 'o', 'u'];
// function reversedArray(array) {
//     let result = [];
//     for (let i of array) {
//         result.unshift(i);
//     }
//     return result;
// }
// console.log(reversedArray(vowels));

// const person = {
//     name: 'mehedy',
//     address: 'rajshahi',
//     age: 23,
//     isMarried: false
// }
// person.toString()
// console.log(person.toString());
// const personKeysArr = Object.keys(person);
// let result = false;
// for (let key of personKeysArr) {
//     if (key === 'age') {
//         result = true;
//         break;
//     }
// }
// console.log(result);

// function countChar(text) {
//     const obj = {};

//     for (let i of text) {
//         if (obj.hasOwnProperty(i)) {
//             obj[i] += 1
//         } else {
//             obj[i] = 1;
//         }
//     }
//     return obj;
// }
// console.log(countChar('imranii'));

// const vowels = ['a', 'e', 'i', 'o', 'u'];
// vowels.pop()
// console.log(vowels);
