const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  counterAnswers = 0;
  groups = data.split("\n\n");

  for (const group of groups) {
    uniqueAnswers = new Set(group.replace(/\n/g, ""));
    counterAnswers += uniqueAnswers.size;
  }
  console.log(counterAnswers);
});
