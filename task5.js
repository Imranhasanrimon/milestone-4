//task one_____________
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const colorsReversed = [];
for (let color of colors) {
    colorsReversed.unshift(color)
}
console.log(colorsReversed);
// or 
const colorsReversed2 = [];
for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    colorsReversed2.unshift(color)
}
console.log(colorsReversed2);
// or 
const colorsReversed3 = [];
for (let i = colors.length - 1; i >= 0; i--) {
    const color = colors[i];
    colorsReversed3.push(color);
}
console.log(colorsReversed3);

//task one_____________
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNum = [];
for (let number of numbers) {
    if (number % 2 === 0) {
        evenNum.push(number)
    }
}
console.log(evenNum);