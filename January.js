// multiple logical operation 
let ram = 8;
let storage = 1000;
let gpu = true;
if ((ram >= 12 || gpu) || storage > 1500) {
    console.log('you can edit');
}
else {
    console.log('low configuration');
}