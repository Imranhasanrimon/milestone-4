// ______________PROBLEM SOLVING_______________ 

//number-----------1
const arr4 = [1, 2, 3, 4, 5, 6, 7];
let sum2 = 0;
for (let element of arr4) {
    sum2 += element
}
console.log(sum2);

//number-----------2
const arr3 = [1, 2, 30, 14, 35, 6, 7];
let max = 0;
for (let element of arr3) {
    if (element > max) {
        max = element;
    }
}
console.log(max);

//number-----------3
const text3 = 'how many vowels are existed here aAAA';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let totalVowels = 0;
for (let char of text3.toLowerCase()) {
    if (vowels.includes(char)) {
        totalVowels++;
    }
}
console.log(totalVowels);

//number-----------5
const productPrices = {
    banan: 250,
    orange: 200,
    lemon: 30,
    egg: 48,
    chickpeas: 85,
    paste: 7,
}
let totalPrice = 0;
for (let prop in productPrices) {
    totalPrice += productPrices[prop];
}
console.log(totalPrice);

//number-----------6
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

//number-----------8
const arr2 = [55, 46, 84, 55, 86, 46, 55, 55, 5, 5,];
const target2 = 5;
let count2 = 0;
for (let element of arr2) {
    if (element === target2) {
        count2++;
    }
}
console.log(count2);

//number-----------9
const productPrice = {
    banan: 250,
    orange: 200,
    lemon: 30,
    egg: 48,
    chickpeas: 85,
    paste: 7,
}
console.log(productPrice.hasOwnProperty('paste'));

//number-----------10
const texts = 'capitalized each word in a string';
const textArr = texts.split(' ')
let textCapitalized = '';
for (let word of textArr) {
    textCapitalized += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
}
console.log(textCapitalized);

//number-----------11
const arr = [10, 20, 30];
let arrTotal = 0;
for (let i of arr) {
    arrTotal += i;
}
console.log(arrTotal / arr.length);

//number-----------12
const num = [55, 46, 84, 55, 86, 46, 55, 55, 5, 5,];
let uniqueNum = [];
for (let element of num) {
    if (!uniqueNum.includes(element)) {
        uniqueNum.push(element)
    }
}
console.log(num);
console.log(uniqueNum);

//number-----------13
const text1 = 'capitalized each word in a string';
const occurrence = {};
for (let i of text1) {
    if (occurrence[i]) {
        occurrence[i]++;
    } else { occurrence[i] = 1 }
}
console.log(occurrence);

//number-----------14
const numbers = [-550, 46, 84, -55, 86, -46, 55, 55, 5, 5,];
let smallNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallNumber) {
        smallNumber = numbers[i];
    }
}
console.log(smallNumber);

//number-----------15
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNumber = 0;
for (let i of numbers2) {
    if (i % 2 === 0) {
        evenNumber += i;
    }
}
console.log(evenNumber);

/*              Array Related Problems                   */
//number-----------16
const newArray = [1, 3, 8, 2, 6];
let sum = 0;
for (let i of newArray) {
    sum += i;
}
console.log(sum);

//number-----------17
const newArray2 = [1, 3, 8, 2, 6];
let largestElement = 0;
for (let i of newArray2) {
    if (i > largestElement) {
        largestElement = i;
    }
}
console.log(largestElement);

//number-----------18
const Array = [1, 2, 3, 1, 4, 1, 1, 1, 5, 3];
const target = Array[2];
let count = 0;
for (let i of Array) {
    if (i === target) {
        count++;
    }
}
console.log(count);

//number-----------19
const newArray3 = [1, 3, 8, 2, 6];
for (let i of newArray3) {
    if (i === 8) {
        console.log(true);
        break;
    }
}

//number-----------20
const newArray4 = [1, 3, 8, 2, 6];
const finalResult = [];
for (let i of newArray4) {
    finalResult.push(i)
}
console.log(finalResult);


/*              String Related Problems                   */
//number-----------21
const text = 'Imran Hasan Rimon';
let newText = '';
for (let i of text) {
    if (i !== ' ') {
        newText += i;
    }
}
console.log(newText);

//number-----------22
const text2 = 'Imran Hasan Rimon iilllkll';
const textObject = {};
let mostFrequent = '';
let maxCount = 0;
for (let i of text2.toLowerCase()) {
    if (textObject.hasOwnProperty(i)) {
        textObject[i]++;
    } else {
        textObject[i] = 1;
    }
    if (textObject[i] > maxCount) {
        maxCount = textObject[i];
        mostFrequent = i;
    }
}
console.log(mostFrequent);


//number-----------23
const inp = "11abc123xyz"
let outp = "";
for (let i of inp) {
    if (isNaN(i)) {
        outp += i;
    } else { outp += 'X' }
}
console.log(outp);

//number-----------24
const inp2 = "Web development  is fun";
const inp2Arr = inp2.split(' ')
let lenghtCheck = 0;
let outp2 = '';
for (let i of inp2Arr) {
    if (i.length > lenghtCheck) {
        lenghtCheck = i.length;
        outp2 = i;
    }
}
console.log(outp2);

/*              Object Related Problems                   */
//number-----------25
const obj = {
    name: 'Abul',
    age: 50,
    city: 'Paris'
}
let propNum = 0;
for (let i in obj) {
    propNum++;
}
console.log(propNum);

//number-----------26
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const newObj = {};
for (let i in obj1) {
    newObj[i] = obj1[i]
}
for (let i in obj2) {
    newObj[i] = obj2[i]
}
console.log(obj1);
console.log(newObj);