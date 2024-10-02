// Challenge 1: Basic Promise
// Create a function called fetchData that returns a promise which resolves to a string "Data received!" after a delay of 2 seconds. Use setTimeout to simulate the delay.

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 2000);
  });
}

// fetchData().then((data) => {
//   console.log(data);
// });

fetchData().then((data) => {
  console.log(data);
});
