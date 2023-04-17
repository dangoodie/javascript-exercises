const palindromes = function (string) {
  //takes everything to lowercase, removes punctuation, and removes whitespace
  cleanString = string
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s+/g, "");

  //creates a reversed string
  reverseString = cleanString.split("").reverse().join("");

  //checks for palindromes
  if (cleanString === reverseString) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
