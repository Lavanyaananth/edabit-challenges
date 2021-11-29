const sevenBoom = (arr) => {
  let splitted = arr.toString().split("");
  console.log(splitted);
  let boomResult = splitted.includes("7")
    ? "Boom!"
    : " None of the items contain 7 within them.";
  return boomResult;
};
const callSevenBoom = sevenBoom([2, 55, 60, 97, 86]);
console.log(callSevenBoom);
