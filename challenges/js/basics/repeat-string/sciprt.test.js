import { test, describe, expect } from "vitest"
import repeatString from "./script.js"

describe("repeatString", () => {
  test("should return a string", () => {
    expect(typeof repeatString(6, "I")).toBe("string")
  })

  test("should return the correct string", () => {
    expect(repeatString(3, "*")).toBe("***")
    expect(repeatString(5, "#")).toBe("#####")
    expect(repeatString(2, "ha ")).toBe("ha ha ")
  })

  test("should return an empty string when count is 0", () => {
    expect(repeatString(0, "*")).toBe("")
  })

  test("should return an empty string when str is empty", () => {
    expect(repeatString(3, "")).toBe("")
  })

  test("should return an empty string when count is negative", () => {
    expect(repeatString(-2, "ha")).toBe("")
  })

  test("should return an empty string when count is not a number", () => {
    expect(repeatString("abc", "ha")).toBe("")
  })

  test("should return an empty string when str is not a string", () => {
    expect(repeatString(2, 2)).toBe("")
  })
})
