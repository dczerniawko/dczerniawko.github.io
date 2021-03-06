const fs = require("fs");

function getSeatId(ticketString) {
  let rowL = 0,
    rowH = 127;
  for (let i = 0; i < 7; i++) {
    currChar = ticketString[i];
    if (currChar == "F") rowH = Math.floor((rowH + rowL) / 2);
    if (currChar == "B") rowL = Math.ceil((rowH + rowL) / 2);
  }

  let colL = 0,
    colH = 7;
  for (let i = 7; i < 10; i++) {
    currChar = ticketString[i];
    if (currChar == "L") colH = Math.floor((colL + colH) / 2);
    if (currChar == "R") colL = Math.ceil((colL + colH) / 2);
  }

  seatId = rowL * 8 + colL;

  return seatId;
}

fs.readFile("data.txt", "utf8", (err, data) => {
  let maxSeatId = 0;
  tickets = data.split("\n");
  if (err) throw err;

  for (const ticket of tickets) {
    seatId = getSeatId(ticket);
    if (seatId > maxSeatId) maxSeatId = seatId;
  }
  console.log(maxSeatId);
});
