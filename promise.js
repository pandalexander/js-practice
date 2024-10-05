// Challenge 1: Basic Promise
// Create a function called fetchData that returns a promise which resolves to a string "Data received!" after a delay of 2 seconds. Use setTimeout to simulate the delay.

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 2000);
  });
}

// Challenge 2: Handling Promise Resolution
// Task: Use the promise from Challenge 1 and add .then() to log the resolved message to the console.

// fetchData().then((data) => {
//   console.log(data);
// });

// Challenge 3: Promise Rejection
// Task: Modify the promise from Challenge 1 to reject after 2 seconds with the message "Promise Rejected!". Use .catch() to log the error.

// function testErrorCatch() {
//   return new Promise((resolve, reject) => {
//     if (Math.random() < 0.5) {
//       setTimeout(() => {
//         resolve("Promise resolved!");
//       }, 2000);
//     } else {
//       setTimeout(() => {
//         reject("Promise rejected!");
//       }, 2000);
//     }
//   });
// }

// testErrorCatch()
//   .then((data) => {
//     console.log("Success! " + data);
//   })
//   .catch((error) => {
//     console.log("Error! " + error);
//   });

// Challenge 4: Chaining Promises
// Task: Create two promises where the first one resolves after 1 second, and the second one (chained to the first) resolves after 2 seconds with a different message. Log both messages.

function firstPromise() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("First Promise Resolved"), 1000);
  });
}

firstPromise()
  .then((firstData) => {
    console.log(firstData);
    return new Promise((resolve) => {
      setTimeout(() => resolve("Second Promise Resolved"), 2000);
    });
  })
  .then((secondData) => console.log(secondData));

// Challenge 5: Promise All
// Task: Create three promises that resolve with different messages after 1, 2, and 3 seconds. Use Promise.all() to log all messages when they are all resolved.

// Challenge 6: Promise Race
// Task: Create two promises where one resolves after 1 second and the other after 3 seconds. Use Promise.race() to log the message of the promise that resolves first.

// Challenge 7: Async/Await Syntax
// Task: Rewrite a function that returns a promise (from any of the previous challenges) using the async/await syntax. Ensure you handle errors with try/catch.

// Challenge 8: Fetch Data with Promises
// Task: Use the Fetch API to retrieve data from a public API (like JSONPlaceholder) and log the response. Handle any potential errors.

// Challenge 9: Sequential Execution with Promises
// Task: Create three promises that resolve with different numbers (1, 2, 3) after random delays. Execute them sequentially, logging each number after it resolves.

// Challenge 10: Implementing a Promise-based Function
// Task: Create a function delay that takes a number (milliseconds) as an argument and returns a promise that resolves after that delay. Use this function in a simple example.
