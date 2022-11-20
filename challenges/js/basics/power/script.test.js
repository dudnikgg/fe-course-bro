import { describe, test, expect } from "vitest"
import power from "./script.js"

describe("power", () => {
  test("should return a power of a given number", () => {
    expect(power(2, 4)).toEqual(16)
    expect(power(4, 3)).toEqual(64)
    expect(power(3, 5)).toEqual(243)
    expect(power(0, 0)).toEqual(1)
    expect(power(0, 1)).toEqual(0)
    expect(power(1, 0)).toEqual(1)
    expect(power(1, 1)).toEqual(1)
  })
})
