const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  let treeCounter = 0;
  rows = data.split("\n");
  if (err) throw err;
  let x = 0;
  let y = 0;
  while (y < rows.length) {
    const currentPosition = rows[y][x % rows[0].length];
    if (currentPosition == "#") {
      treeCounter++;
    }
    y = y + 1;
    x = x + 3;
  }
  console.log(treeCounter);
});
