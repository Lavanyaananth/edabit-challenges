console.log(" Find the second largest number in an array.");
const secondLargest = (arr) => {
  let finalArray = arr.sort(function (a, b) {
    return b - a;
  });
  finalArray = finalArray[1];
  console.log(finalArray);
  return finalArray;
};
secondLargest(["20", "120", "111", "215", "54", "78"]);
