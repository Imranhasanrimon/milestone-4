/*                 MODULE- 23                         */
//task-1____________
const heights2 = [167, 190, 120, 165, 137];
function lowestNumber(arra) {
    let lowestNum = arra[0];
    for (let i of arra) {
        if (i < lowestNum) {
            lowestNum = i;
        }
    }
    return lowestNum;
}
console.log(lowestNumber(heights2));

//task-2____________
const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function smallFriend(frndArr) {
    let smallestName = frndArr[0];
    for (let i of frndArr) {
        if (i.length < smallestName.length) {
            smallestName = i;
        }
    }
    return smallestName;
}
console.log(smallFriend(friends));

//task-2____________
function calculateElectronicsBudget(lap, tab, mob) {
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    const totalLaptopPrice = laptop * lap;
    const totalTabletPrice = tablet * tab;
    const totalMobilePrice = mobile * mob;

    const totalMoneyRequired = totalLaptopPrice + totalTabletPrice + totalMobilePrice;

    return totalMoneyRequired;
}
console.log(calculateElectronicsBudget(2, 2, 1));