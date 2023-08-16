const reverseString = function (word) {
  let finalString = word.split("").reverse().join("");

  let final = word.split("");
  final = final.reverse();
  final = final.join("");

  // for (let i = word.length - 1; i >= 0; i--) {
  //   finalString += word[i];
  // }

  return final;
};

// Do not edit below this line
module.exports = reverseString;
