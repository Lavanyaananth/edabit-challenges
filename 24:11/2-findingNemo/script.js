const findNemo = (str) => {
  let index = str.split(" ").findIndex((item) => item.indexOf("Nemo") > -1);
  index = index > -1 ? `I found Nemo at ${index + 1}` : "I can't find Nemo :(";
  console.log(index);
  return index;
};

findNemo("I am finding Nemo !");
findNemo("Nemo is me");

findNemo("I Nemo am");
