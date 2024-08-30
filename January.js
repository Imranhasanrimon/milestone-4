

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
// let bmi = 24.9
console.log('Your BMI ' + bmi.toFixed(2));
if (bmi < 18.5) {
    console.log('underweight');
} else {
    if (bmi < 25) {
        console.log('normal');
    }
    else {
        if (bmi < 30) {
            console.log('overweight');
        }
        else {
            console.log('obese');
        }
    }
}

// task three --------------
let marks = 69;
if (marks < 60) {
    console.log('F');
} else {
    if (marks < 70) {
        console.log('D');
    } else {
        if (marks < 80) {
            console.log('C');
        } else {
            if (marks < 90) {
                console.log('B');
            }
            else {
                if (marks <= 100) {
                    console.log('A');
                } else {
                    console.log('invalid Marks');
                }
            }
        }
    }
}