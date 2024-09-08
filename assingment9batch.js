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
// console.log(CalculateMoney('s'));

//PROBLEM - 02__________
function checkName(name) {
    if (typeof name !== 'string') {
        return 'Invalid';
    }
    let lastWord = name.slice(-1);
    let array = ['a', 'e', 'i', 'o', 'u', 'y', 'w']
    console.log(lastWord);
    if (array.includes(lastWord)) {
        return 'Good Name';
    } else { return 'Bad Name' }
}
// console.log(checkName('Salman'));

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