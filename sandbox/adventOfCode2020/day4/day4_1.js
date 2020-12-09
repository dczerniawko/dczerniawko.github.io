const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  let validGroups = 0;
  groups = data.split("\n\n");
  if (err) throw err;

  for (const group of groups) {
    const varNum = group.match(/:/g).length;
    if (varNum == 8) validGroups++;
    if (varNum == 7 && !group.match(/cid/)) validGroups++;
  }
  console.log(validGroups);
});
