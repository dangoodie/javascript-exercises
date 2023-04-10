const convertToCelsius = function(fInput) {
  return parseFloat(((fInput - 32) / 1.8).toFixed(1));
};

const convertToFahrenheit = function(cInput) {
  return parseFloat((cInput * 1.8 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
