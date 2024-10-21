module.exports = function caesarCipher(string, shiftNum) {
  const arrCharcode = string.split("").map((letter) => {
    const charcoded = letter.charCodeAt(0);
    const charcodeAfterShift = charcoded + shiftNum;

    if (charcoded < 65 || (charcoded < 97 && charcoded > 90) || charcoded > 122)
      return charcoded;

    if (charcodeAfterShift > 122) return charcodeAfterShift - 26;

    if (charcodeAfterShift > 90 && charcoded <= 90)
      return charcodeAfterShift - 26;

    return charcodeAfterShift;
  });

  return String.fromCharCode(...arrCharcode);
};
