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
let propNumber = [];
for (let prop in student2) {
    propNumber.push(prop)
}
console.log(propNumber.length);
console.log(Object.keys(student2).length);
