// ### 1. Sum of Numbers
// **Array:**
// `const numbers = [10, 20, 30, 40];`

// **Question:**
// Use `.reduce()` to find the sum of all numbers in the `numbers` array.

const numbers = [10, 20, 30, 40];

let reducedNumbers = numbers.reduce((accumulator, item) => {
  return accumulator + item;
});

// console.log(reducedNumbers);
// ---

// ### 2. Concatenate Strings
// **Array:**
// `const words = ['JavaScript', 'is', 'fun'];`

// **Question:**
// Use `.reduce()` to concatenate all strings in the `words` array into a single sentence with spaces between each word.

const words = ["Javascript", "is", "fun"];

let fullSentence = words.reduce((accumulator, word) => {
  return accumulator + " " + word;
});

// console.log(fullSentence);

// ---

// ### 3. Product of Numbers
// **Array:**
// `const nums = [2, 3, 4, 5];`

// **Question:**
// Use `.reduce()` to calculate the product of all numbers in the `nums` array.

const nums = [2, 3, 4, 5];

let productOfNums = nums.reduce((accumulator, item) => {
  return accumulator * item;
});

// console.log(productOfNums);

// ---

// ### 4. Find the Longest Word
// **Array:**
// `const strings = ['apple', 'banana', 'grapefruit', 'pear'];`

// **Question:**
// Use `.reduce()` to find the longest word in the `strings` array.

const strings = ["apple", "banana", "grapefruit", "pear"];

let longestString = strings.reduce((accumulator, item) => {
  if (item.length > accumulator.length) {
    accumulator = item;
  }
  return accumulator;
});

// console.log(longestString);

// ---

// ### 5. Count Occurrences of a Value
// **Array:**
// `const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];`

// **Question:**
// Use `.reduce()` to count how many times the word 'apple' occurs in the `items` array.

const items = ["apple", "banana", "apple", "orange", "banana", "apple"];

let howManyTimes = items.reduce((accumulator, item) => {
  if (item === "apple") {
    accumulator += 1;
  }
  return accumulator;
}, 0);

console.log(howManyTimes);
