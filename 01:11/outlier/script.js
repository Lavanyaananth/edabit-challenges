console.log(
  "You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this outlier N."
);
const outlier = (arr) => {
  let odds = arr.filter((number) => {
    return number % 2;
  });
  let evens = arr.filter((number) => {
    return !(number % 2);
  });
  let result = odds.length < evens.length ? odds.pop() : evens.pop();
  return result;
};
outlier([2, 4, 100, 4, 2602, 37, 36]);
