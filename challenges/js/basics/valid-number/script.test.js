import { test, describe, expect } from "vitest";
import isNumber from "./script";

describe("isNumber", () => {
  test("should return a boolean", () => {
    expect(typeof isNumber(1)).toBe("boolean");
  });

  test("should return true when the value is a number", () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(-1)).toBe(true);
    expect(isNumber(1.1)).toBe(true);
    expect(isNumber(-1.1)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
  });

  test("should return false when the value is not a number", () => {
    expect(isNumber("1")).toBe(false);
    expect(isNumber("0")).toBe(false);
    expect(isNumber("-1")).toBe(false);
    expect(isNumber("1.1")).toBe(false);
    expect(isNumber("-1.1")).toBe(false);
    expect(isNumber("Infinity")).toBe(false);
    expect(isNumber("")).toBe(false);
    expect(isNumber(" ")).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(false)).toBe(false);
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber(() => {})).toBe(false);
  });
});