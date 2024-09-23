const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("What denomination are you?", (denomination) => {
  console.log(`You said you were ${denomination}.`);
  console.log("");

  switch (denomination) {
    case "protestant": {
      console.log("Hi, Calvin!");
      break;
    }
    case "catholic": {
      console.log("Hi, Barron!");
      break;
    }
    default: {
      console.log("Hi, person!");
      break;
    }
  }
  readline.close();
});
