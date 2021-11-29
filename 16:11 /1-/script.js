console.log(
  "Write a function that converts an object into an array of keys and values. "
);
const objectToArray = (obj) => {
  return Object.entries(obj);
};

console.log(
  objectToArray({
    D: 1,
    B: 2,
    C: 3,
  })
);
