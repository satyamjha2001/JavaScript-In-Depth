//Mathematical Operators

const add = 3 + 5;
const sub = 13 - 10;
const mul = 16 * 3;
const div = 130 / 7;
const rem = 673 % 8;
const power = 5 ** 3;

// console.log(add, sub, mul, div, rem, power);

//Math Object in Js

console.log('PI is',Math.PI);
console.log('square root of 2 is ',Math.SQRT2);
console.log('Value of e is ',Math.E);

//Methods on Math Objects

console.log(`square root of 16 is ${Math.sqrt(16)}`);
console.log(`3^5 is ${Math.pow(3, 5)}`);
console.log(`floor value of 3.99 is ${Math.floor(3.99)}`);
console.log(`floor value of 3.99 is ${Math.ceil(3.99)}`);
console.log(`round value of 53.499 is ${Math.round(53.499)}`);
console.log(`random number is ${Math.random()}`);


//Divisibility by 0

console.log(`8/0 is ${8/0}`);
console.log(`-8/0 is ${-8 / 0}`);

// const width = +prompt("Please Enter Rectangle Width");
// const height = +prompt("Please Enter Rectangle Height");

// console.log(width * height);
// document.write(`Rectangle Area: ${width * height}`);

console.log(`Number between 10 to 20 is ${Math.floor((Math.random() * 11) + 10)}`); //numbers from 10 to 20 inclusive

//Lets understand Math.random() range.
//To agar humko x numbers generate karne hai hai to usko utne se multiply kardo or phir jaha se suru karna usko add kardo.

//example jaise humko 5-20 ka nikalna hai to isme 16 numbers hai to 16 se multiply karna hoga or phir 5 se suru karne ke liye 5 add karna hoga.

console.log(`5-20: ${Math.floor(Math.random()*16)+ 5}`);


