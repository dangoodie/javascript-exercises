const fibonacci = function (input) {

  // parse to accept strings
  input = parseInt(input);
  
  // check for negative numbers
  if (input < 0) return "OOPS";
  if (input === 0) return 0;

  let n1 = 0,
    n2 = 1,
    finalOutput = 1;

  // generate fibonacci to specified input length
  for (let i = 1; i < input; i++) {
    finalOutput = n1 + n2;
    n1 = n2;
    n2 = finalOutput;
  }

  return finalOutput;
};

// Do not edit below this line
module.exports = fibonacci;
