console.log(
  " Write a JavaScript function that accepts a string as a parameter and counts and returns the number of vowels within the string."
);
const countVowels = (str) => {
  let vowelCount = str.match(/[aeiou]/gi).length;
  console.log(vowelCount);
  return vowelCount;
};
countVowels("Javascript Developer");
