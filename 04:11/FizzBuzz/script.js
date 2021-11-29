console.log(
  "Write a program that prints the numbers from 1 to 100 and for multiples of ‘3’ print “Fizz” instead of the number and for the multiples of ‘5’ print “Buzz”."
);
const FizzBuzz = (num) => {
  let targetArr = [...Array(num)].map((_, i) => i + 1);
  targetArr = targetArr.map((item) => {
    return item % 3 === 0 ? "Fizz" : item % 5 === 0 ? "Buzz" : item;
  });
  console.log(targetArr);
};
FizzBuzz(100);
