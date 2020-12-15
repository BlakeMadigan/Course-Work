/*
//Video 10. Values and Variables

let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas"
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

// Video 11. Data Types

true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof(true));
console.log(typeof(javascriptIsFun));
// console.log(typeof(23));
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);
console.log(typeof(javascriptIsFun));

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

// Video 13. let const and var

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
//const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);

// Video 14. Basic Operators

// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3  = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x ++; // x + 1 = 101
x --; // x - 1 = 100
x --; // x - 1 = 99
x /= 2; // x / 2 = 49.5
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=, !
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// Video 15. Operator Precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// Video 16. Coding Challenge #1

Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula(you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92; 
let johnHeight = 1.95;

let calcMarkBMI = markMass / markHeight ** 2;
let calcJohnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = calcMarkBMI > calcJohnBMI;
console.log(calcMarkBMI, calcJohnBMI, markHigherBMI);

markMass = 95;
markHeight = 1.88;
johnMass = 85; 
johnHeight = 1.76;

calcMarkBMI = markMass / markHeight ** 2;
calcJohnBMI = johnMass / johnHeight ** 2;

markHigherBMI = calcMarkBMI > calcJohnBMI;
console.log(calcMarkBMI, calcJohnBMI, markHigherBMI);

// Video 17. String and Template Literals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`)

console.log(`string
multiple
lines`)
*/
