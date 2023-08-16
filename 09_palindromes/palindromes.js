const palindromes = function (word) {
  let newWord = "";
  word.split("");
  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }

  return newWord === word ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
