//_____________For Loop__________
//tast one---------
for (let x = 1; x <= 50; x++) {
    console.log(x, 'I will invest at least 6 hrs every single day for next 60 days!');
}

//task two-----------
for (let x = 61; x <= 100; x++) {
    if (x % 2 !== 0) {
        console.log(x);
    }
}

for (let x = 78; x <= 98; x++) {
    if (x % 2 === 0) {
        console.log(x);
    }
}

//task three-----------
let ftotal = 0;
for (let x = 91; x <= 129; x++) {
    if (x % 2 !== 0) {
        ftotal += x;
    }
}
console.log('total:', ftotal);

let fsum = 0;
for (let x = 51; x <= 85; x++) {
    if (x % 2 === 0) {
        fsum += x;
    }
}
console.log('Sum:', fsum);

//task four-----------
let number = 9;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}

//task five-----------
for (let i = 81; i >= 65; i--) {
    console.log(i);
}

