const message = "Hello World!";
// console.log(message);
// console.log(message[2]);
// console.log('Satyam'[1]);
// console.log('My name is Satyam'[5]);
// console.log(message.length);
const capitalMessage = message.toUpperCase();
// console.log(capitalMessage);
// console.log(message.toLowerCase());

const faltuMessage = "   Hi, I am Satyam  ";
// console.log(faltuMessage);
// console.log(faltuMessage.trim());
// console.log(faltuMessage.trim().toLowerCase());

const finalMessage = faltuMessage.trim();

//includes
// console.log(finalMessage.includes('I am Satyam'));
// console.log(finalMessage.includes('I am satyam'));

//indexOf
// console.log(finalMessage.indexOf('am'));
// console.log(finalMessage.indexOf('Sa'));

//replace
// console.log(finalMessage.replace('Hi', 'Hello'));
// console.log(finalMessage.replace('Bye', 'Hello'));

//replaceAll
// console.log(finalMessage.replaceAll('a', 'A'));

//concat
// console.log(message.concat(finalMessage));
// console.log(message.concat(' ',finalMessage));

//padStart and padEnd
const accountNo = "7564";
// console.log(accountNo.padStart(16,'*'));
// console.log(accountNo.padEnd(7,'.'));

//charAt
console.log(finalMessage.charAt(4));

//charCodeAt
console.log(finalMessage.charCodeAt(4)); //Gives ascii code of character

//split
// console.log('My name is Satyam.'.split(''));

// console.log('My name is Satyam.'.split());

// console.log('My name is Satyam.'.split(' '));

//template string

// let templateString = `Last four digits of my account number is ` + accountNo;

let templateString = `Last four digits of my account number is ${accountNo}`;

// console.log(templateString);

console.log(
  `Last four digits of my account number is ${accountNo.padStart(16, "*")}`
);

let money = 6313;
console.log(`My money is $${money}.`);
console.log(`My money is ₹${money}.`);
