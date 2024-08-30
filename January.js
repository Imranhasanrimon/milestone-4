

// tast one -----------------------------------------------------------------------------
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


// task two -----------------------------------------------------------------------------
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

// task three -----------------------------------------------------------------------------
let marks = 59;
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

// task four -----------------------------------------------------------------------------
let myResult = 80;
let friendResult = 39;
if (myResult >= 80) {
    if (friendResult < 40) {
        console.log('block your friend');
    } else {
        if (friendResult < 60) {
            console.log('unseen message');
        } else {
            if (friendResult < 80) {
                console.log('good luck next time');
            }
            else {
                console.log('go for a lunch');
            }
        }
    }

} else {
    console.log('go to home and sleep and act sad');
}

// task five -----------------------------------------------------------------------------
let num1 = 500;
let num2 = 400;
let value;
if (num1 > num2) {
    value = num1 * 2;
} else {
    value = num1 + num2;
}
console.log(value);
// using ternary operator
num1 > num2 ? value = num1 * 2 : value = num1 + num2;
console.log(value);