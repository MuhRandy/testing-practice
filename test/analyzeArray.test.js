const analyzeArray = require("../util/analyzeArray");

test("Basic", () =>
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  }));
test("Minus included", () =>
  expect(analyzeArray([1, 8, -3, 4, 2, -6])).toStrictEqual({
    average: 1,
    min: -6,
    max: 8,
    length: 6,
  }));
