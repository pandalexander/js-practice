// Here are 5 easy practice questions for the JavaScript array.map() function, designed to help you memorize the syntax:

// Convert an array of numbers to an array of strings:

// javascriptCopyconst numbers = [1, 2, 3, 4, 5];
// // Use map to convert each number to a string

const numbers = [1, 2, 3, 4, 5];

// let newNumbers = numbers.map((item) => item.toString());

// console.log(newNumbers);

// Double each number in an array:

// javascriptCopyconst numbers = [1, 2, 3, 4, 5];
// // Use map to double each number

// let newNumbers = numbers.map((item) => (item *= 2));

// console.log(newNumbers);

// Create an array of lengths from an array of strings:

// javascriptCopyconst fruits = ['apple', 'banana', 'cherry'];
// // Use map to create an array of string lengths

const fruits = ["apple", "banana", "cherry"];

let newFruits = fruits.map((item) => {
  return item.length;
});

// console.log(newFruits);

// Convert an array of Celsius temperatures to Fahrenheit:

// javascriptCopyconst celsiusTemps = [0, 10, 20, 30, 40];
// // Use map to convert Celsius to Fahrenheit (formula: F = C * 9/5 + 32)

const celsiusTemps = [0, 10, 20, 30, 40];

let newTemps = celsiusTemps.map((item) => {
  return (item * 9) / 5 + 32;
});

// console.log(newTemps);

// Create an array of greeting messages from an array of names:

// javascriptCopyconst names = ['Alice', 'Bob', 'Charlie'];
// // Use map to create greeting messages (e.g., "Hello, Alice!")

const names = ["Alice", "Bob", "Charlie"];

let newNames = names.map((item) => {
  return "Hello, " + item + "!";
});

console.log(newNames);
