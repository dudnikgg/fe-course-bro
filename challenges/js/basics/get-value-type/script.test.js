import { describe, test, expect } from "vitest"
import getValueType from "./script.js"

describe("getValueType", () => {
  test("getValueType - with number", () => {
    expect(getValueType(1)).toBe("number")
  })

  test("getValueType - with string", () => {
    expect(getValueType("1")).toBe("string")
  })

  test("getValueType - with boolean", () => {
    expect(getValueType(true)).toBe("boolean")
  })

  test("getValueType - with object", () => {
    expect(getValueType({})).toBe("object")
  })
})
