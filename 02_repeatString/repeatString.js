const repeatString = function (string, count) {
  let outputString = "";
  if (count < 0) {
    outputString = "ERROR";
  } else {
    for (let i = 0; i < count; i++) {
      outputString += string;
    }
  }
  return outputString;
};

// Do not edit below this line
module.exports = repeatString;
