import { test, describe, expect } from "vitest"
import union from "./script"

describe("union", () => {
  test("should return an array", () => {
    expect(Array.isArray(union([1, 2, 3], [4, 5, 6]))).toBe(true)
  })

  test("should return the correct array", () => {
    expect(union([1, 2, 3], [2, 3, 4])).toEqual([2, 3])
    expect(union([1, 2, 3], [4, 5, 6])).toEqual([])
    expect(union([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3])
    expect(
      union([2, 4, 6, 8, 10, 12, 10, 8, 6, 4, 2], [3, 6, 9, 12, 15, 18])
    ).toEqual([6, 12])
  })

  test("should return an empty array when both arrays are empty", () => {
    expect(union([], [])).toEqual([])
  })
})
