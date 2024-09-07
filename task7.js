/*                 MODULE- 22                         */
//task-1____________
function toFahrenheit(temCel) {
    let result = temCel * 9 / 5 + 32;
    return result
}
console.log(toFahrenheit(30));

//task-2____________
function repCheck(num) {
    const numArr = [5, 6, 11, 12, 12, 98, 5];
    let count = 0;
    for (let i of numArr) {
        if (i === num) {
            count++;
        }
    }
    return count;
}
console.log(repCheck(12));