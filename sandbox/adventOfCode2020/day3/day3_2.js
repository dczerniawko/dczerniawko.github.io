const fs = require("fs");

function goThroughForest(forest, stepX, stepY) {
  let treeCounter = 0;
  let x = 0;
  let y = 0;

  while (y < forest.length) {
    const currentPosition = forest[y][x % forest[0].length];
    if (currentPosition == "#") {
      treeCounter++;
    }
    y = y + stepY;
    x = x + stepX;
  }
  return treeCounter;
}

fs.readFile("data.txt", "utf8", (err, data) => {
  rows = data.split("\n");
  if (err) throw err;

  //console.log(goThroughForest(rows, 1, 1));
  const moves = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];
  let result = 1;

  for (i = 0; i < moves.length; i++) {
    stepX = moves[i][0];
    stepY = moves[i][1];
    result = result * goThroughForest(rows, stepX, stepY);
  }
  console.log(result);
});
