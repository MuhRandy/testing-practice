module.exports = class Calculator {
  add(x, y) {
    this.#isNumber(x, y);
    return x + y;
  }

  subtract(x, y) {
    this.#isNumber(x, y);
    return x - y;
  }

  multiply(x, y) {
    this.#isNumber(x, y);
    return x * y;
  }

  divide(x, y) {
    this.#isNumber(x, y);
    return x / y;
  }

  #isNumber(x, y) {
    if (typeof x !== "number" || typeof y !== "number")
      throw new Error("Input must be number");
  }
};
