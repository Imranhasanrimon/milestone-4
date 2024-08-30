

// tast one ----------------
let burgerPrice = 400;
let cokePrice;

if (burgerPrice >= 500) {
    cokePrice = 'free'
    console.log(cokePrice);
}
else {
    cokePrice = 30;
    console.log(cokePrice);
}


// task two --------------
let weight = 90;
let heightInch = 67;
let heightMeter = heightInch * 0.0254;
let bmi = weight / heightMeter ** 2;
console.log('Your BMI ' + bmi.toFixed(2));
if (bmi < 18.5) {
    console.log('underweight');
} else {
    if (bmi < 24.9) {
        console.log('normal');
    }
    else {
        console.log('overweight');
    }
}