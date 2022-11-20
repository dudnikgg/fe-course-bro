import removeElements from "./script.js"
import { test, describe, expect } from "vitest"

describe("removeElements", () => {
  test("should remove the first 3 elements", () => {
    expect(removeElements([1, 2, 3, 4, 5])).toEqual([4, 5])
    expect(removeElements([1, 2, 3])).toEqual([])
    expect(removeElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([
      4, 5, 6, 7, 8, 9, 10,
    ])
  })
})
