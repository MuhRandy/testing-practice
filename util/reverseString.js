module.exports = function reverseString(string) {
  const reversed = [];
  const arrString = string.toString().split("");

  for (let i = arrString.length - 1; i >= 0; i--) {
    reversed.push(arrString[i]);
  }

  return reversed.join("");
};
