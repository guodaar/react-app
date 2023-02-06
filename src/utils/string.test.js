import { capitalizeLetter } from "./string";

describe("capitalizeLetter", () => {
  test("Passed value is a valid value", () => {
    const value = "hats";
    const expectedValue = "Hats";
    const transformedValue = capitalizeLetter(value);

    expect(transformedValue).toBe(expectedValue);
  });

  test("Passed value is empty string", () => {
    const value = "";
    const expectedValue = "";
    const transformedValue = capitalizeLetter(value);

    expect(transformedValue).toBe(expectedValue);
  });

  test("Passed value is undefined", () => {
    const value = undefined;
    const expectedValue = "";
    const transformedValue = capitalizeLetter(value);

    expect(transformedValue).toBe(expectedValue);
  });

  test("Passed value is an object", () => {
    const value = {};
    const expectedValue = "";
    const transformedValue = capitalizeLetter(value);

    expect(transformedValue).toBe(expectedValue);
  });
});
