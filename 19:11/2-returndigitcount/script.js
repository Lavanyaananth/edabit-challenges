// const takeIntegers = (number, digit) => {
//   let numArr = [];
//   let separated = [];
//   let final = [];
//   let digi = digit.toString().split("");
//   numArr = [...Array(number)].map((_, i) => i + 1);
//   const mapped = numArr.map((x) => x * x);
//   separated = mapped.toString().split("");
//   for (let i = 0; i < separated.length; i++) {
//     if (separated[i].includes(digi) !== false) {
//       final.push(separated[i]);
//     }
//   }
//   return final.length;
// };
// const endResult = takeIntegers(10, 1);
// console.log(endResult);

const countDigits = (num, digit) => {
  let arr = [];
  let count = 0;
  let passDigit = digit.toString();
  arr = [...Array(num)].map((_, i) => i + 1);
  arr = arr
    .map((x) => x * x)
    .toString()
    .split("");
  arr.map((item) => {
    if (item.includes(passDigit)) {
      count += 1;
    }
  });
  return count;
};

const callCountDigits = countDigits(25, 2);
console.log(callCountDigits);
