const calcAge = (age) => {
  let gettingLeapDays = Math.ceil(age / 4);
  let gettingAgeInDays = age * 365 + gettingLeapDays;
  console.log(gettingAgeInDays);
};
console.log(calcAge(65));
