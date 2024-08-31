const friends = ['Najmul', 'abdur R', 'Saad']
const numbers = [28, 54, 24, 'imran', 80, 60, 70, 80]
numbers.push('najmul', true)
const pop1 = numbers.pop()

console.log(numbers);
console.log(numbers.length);
console.log(pop1);
numbers.shift()
numbers.unshift('first')
console.log('..................');

console.log(numbers.includes(80));
console.log(Array.isArray(pop1));
console.log(Array.isArray(friends));
