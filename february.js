console.log("february...................................................");
// task two ------------
let weight = 90;
let heightInch = 67;
let heightMeter = heightInch * 0.0254;
let bmi = weight / heightMeter ** 2;
// let bmi = 25
console.log(`your BMI: ${bmi.toFixed(2)}`);
if (bmi < 18.5) {
    console.log('underweight');
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("normal");
} else if (bmi >= 25 && bmi <= 29.9) {
    console.log('overweight');
} else { console.log('obese'); }