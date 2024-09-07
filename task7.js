/*                 MODULE- 22                         */
//task-1____________
function toFahrenheit(temCel) {
    let result = temCel * 9 / 5 + 32;
    return result
}
console.log(toFahrenheit(30));

//task-2____________
function repCheck(num) {
    const numArr = [5, 6, 11, 12, 12, 98, 5, 'imran'];
    let count = 0;
    for (let i of numArr) {
        if (i === num) {
            count++;
        }
    }
    return count;
}
console.log(repCheck(12));

//task-3____________
function vowelCount(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i of string.toLocaleLowerCase()) {
        if (vowels.includes(i)) {
            count++
        }
    }
    return count;
}
console.log(vowelCount('aeioIIIAu'));

//task-4____________
function longWord(sentece) {
    const sentArr = sentece.split(' ');
    let longestWord = ''
    for (let i of sentArr) {
        if (i.length > longestWord.length) {
            longestWord = i;
        }
    }
    return longestWord;
}
console.log(longWord(' I am learning Programming to become a programmer'));