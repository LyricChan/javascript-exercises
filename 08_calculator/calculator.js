const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  // let sum = 0;

  // for (const num of arr) {
  //   sum += num;
  // }

  // return sum;

  return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function (arr) {
  // let sum = 0;

  // for (const num of arr) {
  //   sum *= num;
  // }

  // return sum;

  return arr.reduce((total, current) => total * current);
};

const power = function (x, y) {
  return Math.pow(x, y);
};

const factorial = function (x) {
  if (x === 0) return 1;
  let sum = 1;

  for (let i = x; i > 0; i--) {
    sum *= i;
  }

  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
