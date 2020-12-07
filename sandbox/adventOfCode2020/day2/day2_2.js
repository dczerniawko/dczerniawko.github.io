const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  data = data.split("\n");

  let counter = 0;
  for (let i = 0; i < data.length - 1; i++) {
    const [firstOccurring, secondOccurring, letter, checkString] = data[i]
      .match(/([0-9]+)\-([0-9]+) ([a-z]): ([a-z]+)/)
      .slice(1);

    const firstLetter = checkString[parseInt(firstOccurring) - 1];
    const secondLetter = checkString[parseInt(secondOccurring) - 1];

    if (firstLetter != secondLetter) {
      if (letter == firstLetter || letter == secondLetter) {
        counter++;
      }
    }
  }
  console.log(counter);
});
