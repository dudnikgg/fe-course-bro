import { describe, test, expect } from "vitest"
import humanCatDogYears from "./script.js"

describe("humanCatDogYears", () => {
  test("should return an array of cat and dog years", () => {
    expect(humanCatDogYears(1)).toEqual([1, 15, 15])
    expect(humanCatDogYears(2)).toEqual([2, 24, 24])
    expect(humanCatDogYears(10)).toEqual([10, 56, 64])
    expect(humanCatDogYears(5)).toEqual([5, 36, 39])
    expect(humanCatDogYears(16)).toEqual([16, 80, 84])
  })
})
