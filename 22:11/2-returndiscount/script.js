console.log(
  "Create a function that takes two arguments: the original price and the discount percentage as integers and returns the final price after the discount."
);
const dis = (price, discount) => {
  return console.log(price - price * (discount / 100));
};
dis(1500, 50);
dis(89, 20);
dis(100, 75);
