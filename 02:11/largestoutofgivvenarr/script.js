console.log(
  "Given an array of numbers, return the highest number that can be made out of it."
);
const largestOut = (array) => {
  let resultedArray = array
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join("");
  console.log(resultedArray);
  return resultedArray;
};
largestOut([3, 6, 0, 9]);
largestOut([1, 34, 3, 98, 9, 76, 45, 4]);
