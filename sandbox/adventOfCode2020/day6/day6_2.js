const fs = require("fs");
var _ = require("underscore");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  counterAnswers = 0;
  groups = data.split("\n\n");

  for (const group of groups) {
    passengers = group.split("\n");
    counterAnswers += _.intersection.apply(_, passengers).length;
    console.log(_.intersection.apply(_, passengers).length);
  }
  console.log(counterAnswers);
});
