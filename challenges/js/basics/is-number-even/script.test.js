import { describe, test, expect } from "vitest"
import isEven from "./script.js"

describe("isEven", () => {
  test("isEven - with even number", () => {
    expect(isEven(2)).toBe(true)
  })

  test("isEven - with odd number", () => {
    expect(isEven(3)).toBe(false)
  })

  test("isEven - with zero", () => {
    expect(isEven(0)).toBe(true)
  })

  test("isEven - with negative number", () => {
    expect(isEven(-4)).toBe(true)
  })
})
