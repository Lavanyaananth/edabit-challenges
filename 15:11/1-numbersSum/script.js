console.log(
  "Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array. "
);
const numbersSum = (arr) => {
  let count = 0;
  arr.map((item) => {
    return typeof item === "number" ? (count += item) : count;
  });
  console.log(count);
};
numbersSum([true, false, "123", "75"]);
