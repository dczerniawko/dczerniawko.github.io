const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  let validPassports = 0;
  passports = data.split("\n\n");
  if (err) throw err;

  for (const passport of passports) {
    let passportDict = {};
    for (const variable of passport.split(/\n| /)) {
      const splittedVar = variable.split(":");
      if (splittedVar[0]) passportDict[splittedVar[0]] = splittedVar[1];
    }
    if (
      "byr" in passportDict &&
      "iyr" in passportDict &&
      "eyr" in passportDict &&
      "hgt" in passportDict &&
      "hcl" in passportDict &&
      "ecl" in passportDict &&
      "pid" in passportDict
    ) {
      const hgt = passportDict["hgt"].match(/^([0-9]+)(cm|in)$/);
      if (hgt) {
        if (
          passportDict["byr"] >= 1920 &&
          passportDict["byr"] <= 2002 &&
          passportDict["iyr"] >= 2010 &&
          passportDict["iyr"] <= 2020 &&
          passportDict["eyr"] >= 2020 &&
          passportDict["eyr"] <= 2030 &&
          ((hgt[2] == "cm" && hgt[1] >= 150 && hgt[1] <= 193) ||
            (hgt[2] == "in" && hgt[1] >= 59 && hgt[1] <= 76)) &&
          passportDict["hcl"].match(/^#[a-f0-9]{6}$/) &&
          passportDict["ecl"].match(/^amb|blu|brn|gry|grn|hzl|oth$/) &&
          passportDict["pid"].match(/^[0-9]{9}$/)
        ) {
          validPassports++;
          console.log(passportDict);
        }
      }
    }

    // const hgt = passportDict["hgt"].match(/([0-9]+)(cm|in)/);

    // console.log(passportDict["hcl"]);
    // if (!passportDict["hcl"].match(/#[a-f0-9]{6}/)) continue;
    // console.log(passportDict["hcl"]);
    //validPassports++;

    // try {
    //   const hgt = passportDict["hgt"].match(/([0-9]+)(cm|in)/);
    //   if (
    //     passportDict["byr"] >= 1920 &&
    //     passportDict["byr"] <= 2002 &&
    //     passportDict["iyr"] >= 2010 &&
    //     passportDict["iyr"] <= 2020 &&
    //     passportDict["eyr"] >= 2020 &&
    //     passportDict["eyr"] <= 2030 &&
    //     ((hgt[2] == "cm" && hgt[1] >= 150 && hgt[1] <= 193) ||
    //       (hgt[2] == "in" && hgt[1] >= 59 && hgt[1] <= 76)) &&
    //     passportDict["hcl"].match(/#[a-f0-9]{6}/) &&
    //     passportDict["ecl"].match(/amb|blu|brn|gry|grn|hzl|oth/) &&
    //     passportDict["pid"].match(/[0-9]{9}/)
    //   )
    //     validPassports++;
    // } catch {
    //   continue;
    // }
  }
  console.log(validPassports);
});
