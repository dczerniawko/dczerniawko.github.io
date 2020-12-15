const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  instructions = data.split("\n");

  accumulator = 0;
  programCounter = 0;
  executedPC = new Array(instructions.length).fill(0);

  while (programCounter < instructions.length - 1 && programCounter >= 0) {
    instruction = instructions[programCounter].split(" ");

    if (executedPC[programCounter] == 1) break;

    executedPC[programCounter]++;

    switch (instruction[0]) {
      case "acc":
        accumulator += parseInt(instruction[1]);
        break;
      case "jmp":
        programCounter += parseInt(instruction[1]);
        break;
      case "nop":
        break;
      default:
        console.log("Something wrong!");
    }

    if (instruction[0] != "jmp") programCounter++;
  }
  console.log(accumulator);
});
