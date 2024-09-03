const numbers = [1, 2, 3, 4, 5, 6, 7]
console.log(numbers);
const reversed = [];
for (let i = 6; i >= 0; i--) {
    reversed.unshift(numbers[i])
}
console.log(reversed);