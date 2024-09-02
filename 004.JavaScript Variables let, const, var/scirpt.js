{ var firstName = "Satyam"; }  //scope of var is throughout its function so block doesn't matter.
let lastName = "Jha";  //scope of let and const is block.
let age = 15;
let खुशहै = true;
firstName = 100;
var a;

const hoursInDay = 24; //change is not possible. Const must be initialized.

let userIntro =
    "Hi, my name is " +
    firstName +
    " " +
    lastName +
    ". I am " +
    age +
    " " +
    "years old.";

console.log(userIntro);
    
a = 'Saket';  // by using a in userIntro we get value undefined. but below this we get Saket as a value.

console.log(b); //undefined because value is not given before log.
var b = 15;

c = 10;
console.log(c); // log 10
var c;

// console.log(d); // gives reference error
let d = 11;

e = 5;
// console.log(e); //gives error
let e;