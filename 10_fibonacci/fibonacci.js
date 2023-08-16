const fibonacci = function (x) {
  let x0 = 0,
    x1 = 1,
    nextNum;

  if (typeof x !== Number) {
    Number(x);
  }

  if (x < 0) return "OOPS";
  if (x === 0) return 0;

  for (let i = 2; i <= x; i++) {
    nextNum = x0 + x1;
    x0 = x1;
    x1 = nextNum;
  }

  return x1;
};

// Do not edit below this line
module.exports = fibonacci;
