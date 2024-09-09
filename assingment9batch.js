/*            Assignment-04 9th Batch                */
//PROBLEM - 01__________
function CalculateMoney(tickets) {
    if (tickets < 0 || typeof tickets !== 'number') {
        return 'invalid Number'
    }
    const totalIncome = tickets * 120;
    const security = 500;
    const lunch = 8 * 50;
    const totalCost = security + lunch;
    const balance = totalIncome - totalCost;
    return balance;
}
console.log(CalculateMoney('s'));

//PROBLEM - 02__________
function checkName(name) {
    if (typeof name !== 'string') {
        return 'Invalid';
    }
    let lastWord = name.slice(-1);
    let array = ['a', 'e', 'i', 'o', 'u', 'y', 'w']
    if (array.includes(lastWord)) {
        return 'Good Name';
    } else { return 'Bad Name' }
}
console.log(checkName('Salman'));

//PROBLEM - 03__________
function deleteInvalds(array) {
    let newArray = [];
    if (!Array.isArray(array)) {
        return 'Invalid'
    }
    for (let i of array) {
        if (typeof i === 'number' && !isNaN(i)) {
            newArray.push(i)
        }
    }
    return newArray;

}
const checkArray = [1, 3, NaN, 5, undefined, null, -20];
console.log(deleteInvalds(checkArray));

//PROBLEM - 04__________
function password(object) {

    if (object.birthYear.toString().length <= 3 || object.birthYear === undefined || object.name === undefined || object.siteName === undefined) {
        return 'Invalid'
    }

    const siteName = object.siteName[0].toUpperCase() + object.siteName.slice(1);

    const output = siteName + '#' + object.name + '@' + object.birthYear;


    return output
}

const object = {
    name: 'kolimuddin',
    siteName: 'google',
    birthYear: 1992
}
console.log(password(object));

//PROBLEM - 05__________
function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return 'Invalid Input'
    }
    let earning = 0;
    for (let i of arr) {
        if (i >= 3000) {
            i = (i / 100) * 80;
            earning += i;
        } else {
            earning += i;
        }
    }
    const savings = earning - livingCost;
    if (savings >= 0) {
        return savings;
    } else {
        return 'Earn More'
    }
}
const income = [900, 2700, 3400];
console.log(monthlySavings(income, 10000));

