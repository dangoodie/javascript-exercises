const removeFromArray = function (array, ...args) {
  for (const argument of args) {
    const index = array.indexOf(argument);
    if (index >= 0) {
      array.splice(index, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
