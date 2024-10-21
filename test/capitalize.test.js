const capitalize = require("../util/capitalize");

test("capitalize my name", () => expect(capitalize("randy")).toBe("Randy"));
test("capitalize my full name", () =>
  expect(capitalize("muhammad randy")).toBe("Muhammad Randy"));
test("capitalize random capital", () =>
  expect(capitalize("mUhaMMad RAndy")).toBe("Muhammad Randy"));
test("capitalize a letter", () => expect(capitalize("m")).toBe("M"));
