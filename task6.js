/*                 MODULE- 21                         */
//task-1____________
function multiplication(num1, num2, num3, num4) {
    const result = num1 * num2 * num3 * num4;
    return result;
}
const multResult = multiplication(2, 2, 2, 2);
console.log(multResult);

//task-2____________
function conditionalMultiplication(number) {
    if (number % 2 !== 0) {
        return number * 2;
    } return number / 2;
}
const conditionalMultiplicationResult = conditionalMultiplication(6);
console.log(conditionalMultiplicationResult);

//task-3____________
function makeAvg(numArray) {
    const size = numArray.length;
    let total = 0;
    for (let i of numArray) {
        total += i;
    }
    const avg = total / size;
    return `size: ${size} total: ${total} avg: ${avg}`;
}
const numArray = [2, 4, 5, 7];
const makeAvgResult = makeAvg(numArray);
console.log(makeAvgResult);