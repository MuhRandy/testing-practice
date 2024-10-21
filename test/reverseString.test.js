const reverseString = require("../util/reverseString");

test("basic", () => expect(reverseString("abc")).toBe("cba"));
test("random capital", () =>
  expect(reverseString("fuFufAfa")).toBe("afAfuFuf"));
test("number", () => expect(reverseString(123)).toBe("321"));
