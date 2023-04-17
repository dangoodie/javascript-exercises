const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  const sum = array.reduce((total, num) => {
    return total + num;
  }, 0);
  return sum;
};

const multiply = function(array) {
  const multiplies = array.reduce((total, num) => {
    return total * num;
  }, 1)
  return multiplies;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let factorial = 1
	for (let i = 1; i < num + 1; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
