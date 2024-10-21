module.exports = function capitalize(string) {
  const stringArr = string.split(" ");
  const capitalized = [];

  stringArr.forEach((word) => {
    const firstLetter = word.slice(0, 1);
    const theRest = word.slice(1);

    capitalized.push(firstLetter.toUpperCase() + theRest.toLowerCase());
  });

  return capitalized.join(" ");
};
