const oddishEvenish = (num) => {
  let result = num
    .toString()
    .split("")
    .map(Number)
    .reduce(function (a, b) {
      return a + b;
    }, 0);
  result = result % 2 == 0 ? "evenish" : "oddish";
  return result;
};
const callOddishEvenish = oddishEvenish(43);
console.log(callOddishEvenish);
