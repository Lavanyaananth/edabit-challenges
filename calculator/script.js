const calculator = (a, operation, b) => {
  if (operation === "/" && b === 0) {
    return "cant divide";
  }
  if (operation === "+") return a + b;
  if (operation === "-") return a - b;
  if (operation === "*") return a * b;
  if (operation === "/") return a / b;
};

console.log(calculator(2, "+", 2));
console.log(calculator(2, "*", 2));
console.log(calculator(4, "/", 2));
console.log(calculator(4, "/", 0));
