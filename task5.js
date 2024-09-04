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

