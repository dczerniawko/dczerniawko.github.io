const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  data = data.split("\n");

  let counter = 0;
  for (let i = 0; i < data.length - 1; i++) {
    const [minOccurring, maxOccurring, letter, checkString] = data[i]
      .match(/([0-9]+)\-([0-9]+) ([a-z]): ([a-z]+)/)
      .slice(1);

    const regex = new RegExp(letter, "g");

    try {
      const letterCounter = checkString.match(regex).length;

      if (letterCounter >= minOccurring && letterCounter <= maxOccurring) {
        counter++;
      }
    } catch {
      continue;
    }
  }
  console.log(counter);
});
