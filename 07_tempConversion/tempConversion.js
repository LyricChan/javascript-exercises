const convertToCelsius = function (farh) {
  return Math.round((farh - 32) * (5 / 9)) / 10;
};

const convertToFahrenheit = function (celc) {
  return Math.round(celc * (9 / 5) + 32) / 10;
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
