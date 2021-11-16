const arrayOfMultiples = (x, y) => {
  console.log(x, y);
  let newArr = [];
  let a = 1;
  for (let i = 1; i <= y; i++) {
    newArr.push(x * a);
    a++;
  }
  return newArr;
};

console.log("returning o/p", arrayOfMultiples(7, 5));
console.log("returning o/p", arrayOfMultiples(12, 10));
