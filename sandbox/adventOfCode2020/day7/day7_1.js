const fs = require("fs");

function bagsContainingBag(set, bag) {
  bags = new Set();
  re = new RegExp(`(.+) bags contain.+${bag}`);
  for (rule of rules) {
    bags.add((rule.match(re) || [, null])[1]);
  }
  bags.delete(null);

  return bags;
}

function findAllBags(set, bag) {
  parents = bagsContainingBag(set, bag);
  if (parents.size > 0) {
    for (parent of parents) {
      for (newParent of findAllBags(set, parent)) {
        parents.add(newParent);
        console.log(parents);
      }
    }
  }
  return parents;
}

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) throw err;
  rules = data.split("\n");

  console.log(findAllBags(rules, "shiny gold"));
});
