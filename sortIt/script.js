const sortIt = (arr) => {
  console.log(arr);
  return arr.sort();
};

console.log("returning o/p", sortIt([4, 1, 3]));
console.log("returning o/p", sortIt([[4], [1], [3]]));
console.log("returning o/p", sortIt([4, [1], 3]));
