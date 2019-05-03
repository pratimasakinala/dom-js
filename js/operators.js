// var age = 15, // stores number
//     accompaniedByAdult = false; // stores boolean

var age = prompt('Enter your age: ');
    accompaniedByAdult = confirm('Are you accompanied by someone over 21?');

console.log(typeof age);
console.log(typeof parseInt(age));

if (age >= 18 && age < 21) {
    // if above statement is true

    // if (accompaniedByAdult) {
    //     console.log('Allowed');
    // } else {
    //     console.log('Denied');
    // }

    // ternary operation:
    accompaniedByAdult ? console.log('Allowed') : console.log('Denied');
} else if (age >= 21) {
    console.log('You are free');
} else {
    // if above statement was false
    console.log('Try again next year');
}


















// ternary operation
// (age >= 18 && age < 21) ?
//     (accompaniedByAdult ?
//         console.log('Allowed') : console.log('Denied')) :
//     (age >= 21) ?
//         console.log('You are free') :
//         console.log('Try again next year');