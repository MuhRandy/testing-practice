const Calculator = require("../util/calculator");
const calculator = new Calculator();
const error = "Input must be number";

test("Basic addition", () => {
  expect(calculator.add(3, 5)).toBe(8);
});
test("Addition with minus (1)", () => {
  expect(calculator.add(3, -5)).toBe(-2);
});
test("Addition with minus (2)", () => {
  expect(calculator.add(-3, -5)).toBe(-8);
});
test("Throw Error when inputs are not number", () => {
  expect(() => calculator.add(3, "a")).toThrow("Input must be number");
});
test("Throw Error when inputs are not number", () => {
  expect(() => calculator.add([], "a")).toThrow(error);
});

test("Basic subtraction", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});
test("Subtraction with minus (1)", () => {
  expect(calculator.subtract(3, -5)).toBe(8);
});
test("Subtraction with minus (2)", () => {
  expect(calculator.subtract(-3, 5)).toBe(-8);
});
test("Subtraction with minus (3)", () => {
  expect(calculator.subtract(-3, -5)).toBe(2);
});
test("Throw Error when inputs are not number", () => {
  expect(() => calculator.subtract("a", -5)).toThrow(error);
});
test("Throw Error when inputs are not number", () => {
  expect(() => calculator.subtract("a", {})).toThrow(error);
});

test("Basic multiplying", () => {
  expect(calculator.multiply(5, 4)).toBe(20);
});
test("Multiplying with minus (1)", () => {
  expect(calculator.multiply(-5, 4)).toBe(-20);
});
test("Multiplying with minus (2)", () => {
  expect(calculator.multiply(5, -4)).toBe(-20);
});
test("Multiplying with minus (3)", () => {
  expect(calculator.multiply(-5, -4)).toBe(20);
});
test("Throw Error when inputs are not number", () => {
  expect(() => calculator.multiply("a", -5)).toThrow(error);
});
test("Throw Error when inputs are not number", () => {
  expect(() => calculator.multiply("a", {})).toThrow(error);
});

test("Basic dividing", () => {
  expect(calculator.divide(15, 3)).toBe(5);
});
test("Dividing with minus (1)", () => {
  expect(calculator.divide(15, -3)).toBe(-5);
});
test("Dividing with minus (2)", () => {
  expect(calculator.divide(-15, 3)).toBe(-5);
});
test("Dividing with minus (3)", () => {
  expect(calculator.divide(-15, -3)).toBe(5);
});
test("Throw Error when inputs are not number", () => {
  expect(() => calculator.divide("a", -5)).toThrow(error);
});
test("Throw Error when inputs are not number", () => {
  expect(() => calculator.divide("a", {})).toThrow(error);
});
