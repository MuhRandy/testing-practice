const caesarCipher = require("../util/caesarCipher");

test("From z to a", () => expect(caesarCipher("xyz", 3)).toBe("abc"));
test("From Z to A", () => expect(caesarCipher("XyZ", 3)).toBe("AbC"));
test("Preserve letter case", () =>
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr"));
test("Preserve non-alphabetical characters", () =>
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!"));
