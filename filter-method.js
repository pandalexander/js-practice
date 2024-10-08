const testArray = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 40 },
  true,
  false,
  null,
  undefined,
  [1, 2, 3],
  [4, 5, 6],
  "aardvark",
  "butterfly",
  "cat",
  "dog",
  "elephant",
  11,
  13,
  17,
  19,
  23,
  29,
  "hello",
  "world",
  "javascript",
  "programming",
  "OpenAI",
  { x: 1, y: 2 },
  { x: 1, y: 2, z: 3 },
  { a: true, b: false },
  100,
  200,
  300,
  400,
  500,
];

// 1. Filter out even numbers

function filterEven(arr) {
  let filteredArr = arr.filter(
    (item) => item % 2 === 0 && typeof item === "number"
  );
  return filteredArr;
}

// console.log(filterEven(testArray));

// 2. Filter strings longer than 5 characters

function filterLongString(arr) {
  let stringArray = arr.filter((item) => typeof item === "string");
  let filteredString = stringArray.filter((item) => item.length > 5);
  return filteredString;
}

// console.log(filterLongString(testArray));

// 3. Filter objects with a specific property value
// prop value = "age" "30"

function filterProperty(arr, prop, val) {
  let typeFilter = arr.filter(
    (item) => typeof item === "object" && item !== null
  );
  let filtered = typeFilter.filter((item) => item.age === 30);
  return filtered;
}

// console.log(filterProperty(testArray));

// 4. Filter prime numbers

function primeFunction(arr) {
  let primeFilter = arr.filter((item) => {
    if (typeof item !== "number") {
      return false;
    }

    if (item < 2) {
      return false;
    }

    for (let i = 2; i < Math.sqrt(item); i++) {
      if (item % i === 0) {
        return false;
      }
      return true;
    }
  });
  return primeFilter;
}

// console.log(primeFunction(testArray));

// 5. Filter unique values

let uniqueTestArr = [
  1,
  1,
  1,
  1,
  1,
  1,
  "banana",
  4,
  5,
  6,
  6,
  "apple",
  "apple",
  null,
];

function filterUnique(arr) {
  let filteredArr = arr.filter((item, index) => arr.indexOf(item) === index);
  return filteredArr;
}

// console.log(filterUnique(uniqueTestArr));

// 6. Filter strings that start with a vowel

function filterVowel(arr) {
  let filteredArr = arr.filter((item) => {
    if (typeof item === "string") {
      if (
        item.charAt(0) === "a" ||
        item.charAt(0) === "e" ||
        item.charAt(0) === "i" ||
        item.charAt(0) === "o" ||
        item.charAt(0) === "u"
      ) {
        return item;
      }
    }
  });
  return filteredArr;
}

// console.log(filterVowel(uniqueTestArr));

// 7. Filter numbers within a range

// let numbersArr = [1, 6, 8, 4, 3, 14, 23, 55, 1, 2, 6, 4, 55];

function filterNumbers(start, end, arr) {
  let newArr = arr.filter((item) => {
    if (item >= start && item <= end) {
      return item;
    }
  });
  return newArr;
}

// console.log(filterNumbers(3, 25, numbersArr));

// 8. Filter objects with all truthy values

const truthyArr = [
  0,
  1,
  "",
  "hello",
  false,
  true,
  null,
  undefined,
  NaN,
  42,
  [],
  {},
  [1, 2],
  { name: "Alice" },
];

function returnTruthyItems(arr) {
  return truthyArr.filter((item) => !!item);
}

// console.log(returnTruthyItems(truthyArr));

// 9. Filter elements that appear more than once

let numbersArr = [1, 6, 8, 4, 3, 14, 23, 55, 1, 2, 6, 4, 55];

function filterRepeats(arr) {
  return arr.filter((item, index) => {
    if (arr.indexOf(item) !== index) {
      return item;
    }
  });
}

// console.log(filterRepeats(numbersArr));

// 10. Filter strings containing a specific substring

let stringArr = [
  "string",
  "str",
  "stringy",
  "string cheese",
  "cheese",
  "foo",
  "bar",
];

function substringFilter(arr, substring) {
  return arr.filter((item) => item.includes(substring));
}

// console.log(substringFilter(stringArr, "str"));

// Filter odd numbers

const oddArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredOddArr = oddArr.filter((item) => item % 2);

// console.log(filteredOddArr);

// Filter strings longer than 5 characters

const stringsArr = ["keating", "poetry", "ben", "all", "shakespeare", "ox"];

const longerArr = stringsArr.filter((item) => item.length > 3);

console.log(longerArr);
