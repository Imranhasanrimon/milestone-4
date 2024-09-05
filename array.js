// ______________PROBLEM SOLVING_______________ 
//number-----------1
const newArray = [1, 3, 8, 2, 6];
let sum = 0;
for (let i of newArray) {
    sum += i;
}
console.log(sum);

//number-----------2
const newArray2 = [1, 3, 8, 2, 6];
let largestElement = 0;
for (let i of newArray2) {
    if (i > largestElement) {
        largestElement = i;
    }
}
console.log(largestElement);

//number-----------3
const Array = [1, 2, 3, 1, 4, 1, 1, 1, 5, 3];
const target = Array[2];
let count = 0;
for (let i of Array) {
    if (i === target) {
        count++;
    }
}
console.log(count);