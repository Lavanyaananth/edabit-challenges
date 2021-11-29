console.log(
  ".Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass."
);
const areaOfCountry = (name, area) => {
  const totalLandMass = 148940000;
  let occupiedArea = (area / totalLandMass) * 100;
  occupiedArea = occupiedArea.toFixed(2);
  occupiedArea =
    name +
    " " +
    "is" +
    " " +
    occupiedArea +
    "% " +
    "of the total world's landmass";
  console.log(occupiedArea);
};
areaOfCountry("Russia", 17098242);
areaOfCountry("USA", 9372610);
