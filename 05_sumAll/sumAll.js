const sumAll = function (num1, num2) {
  if (
    num1 <= 0 ||
    num2 <= 0 ||
    typeof num1 != "number" ||
    typeof num2 != "number"
  ) {
    return "ERROR";
  } else {
    let largerNum,
      smallerNum,
      sum = 0;
    if (num1 >= num2) {
      largerNum = num1;
      smallerNum = num2;
    } else {
      largerNum = num2;
      smallerNum = num1;
    }
    for (let i = smallerNum; i <= largerNum; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
