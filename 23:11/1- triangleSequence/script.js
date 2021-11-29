console.log(
  "Write a function that returns the number of dots when given its corresponding triangle number of the sequence."
);
const triangle = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    count = count + i;
  }
  console.log(count);
  return count;
};
triangle(1);
triangle(6);
triangle(215);
