const loneOnes = (num) => {
  let splitted = num.toString().split("");
  let count = 0;
  console.log(splitted.length);
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i].includes("1")) {
      count += 1;
    }
  }
  return count;
};
const callLoneOnes = loneOnes(101);
console.log(callLoneOnes);
