//______________Js object_______________
//task one--------
const colors = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    'golden rod': '#daa520'
}
console.log(colors['golden rod']);

//task two--------
const car = {
    make: 'toyota',
    model: 'corolla',
    year: 2020
}
car['passenger capacity'] = 5;
console.log(car);

//task three--------
const student = {
    name: 'Hamim Sakib',
    id: 5421,
    physics: {
        subject: 'HSC physics',
        author: 'shahjahan Tapan',
        marks: 30
    }
}
console.log(student.physics.marks);

//task four--------
let student2 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
console.log(Object.keys(student2).length);
// or 
let propNumber = [];
for (let prop in student2) {
    propNumber.push(prop)
}
console.log(propNumber.length);

//task five--------
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}
for (let prop in myObject) {
    console.log('Key: ', prop, '| type: ', typeof myObject[prop]);
}
console.log('_________end__________');


//______________Js string_______________
//task one--------
let text = 'this is an apple in a box';
let count = 0;
for (let i = 0; i < text.length; i++) {
    if (text[i] === 'a') {
        count++;
    }
}
console.log(count);
//or
let count2 = text.split('a').length - 1;
console.log(count2);