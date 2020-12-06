const fs = require("fs");

let numbers = fs
  .readFileSync("data.txt", "utf8")
  .split("\n")
  .map((number) => parseInt(number));

for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = i + 1; j < numbers.length - 1; j++) {
    for (let k = j + 1; k < numbers.length - 1; k++) {
      if (numbers[i] + numbers[j] + numbers[k] === 2020) {
        console.log(numbers[i] * numbers[j] * numbers[k]);
      }
    }
  }
}
