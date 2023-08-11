const leapYears = function (year) {
  //leap year neneds to be divisible by 4
  // leap years divisible by 100 are not leap years
  // unless divisible by 400
  let yearDividedby4 = year % 4 == 0 ? true : false;
  let centuryYear = !(year % 100 == 0) || year % 400 == 0 ? true : false;

  //   if (yearDividedby4 && !(year % 100 == 0) && year % 400 == 0) {
  //     return true;
  //   } else return false;
  if (yearDividedby4 && centuryYear) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = leapYears;
