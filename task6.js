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