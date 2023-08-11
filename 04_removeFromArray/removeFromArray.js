const removeFromArray = function (arr, ...args) {
  //   let newArr = [];

  // args.sort(function (a, b) {
  //   return a - b;
  // });

  // for (const arg of args) {
  //   for (const num of arr) {
  //     if (num === arg) {
  //       arr.splice(arg - 1, 1);
  //     }
  //   }
  //   return arr;
  // }

  const newArr = [];

  arr.forEach((items) => {
    if (!args.includes(items)) {
      newArr.push(items);
    }
  });

  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
