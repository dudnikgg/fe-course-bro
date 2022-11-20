import { test, describe, expect } from "vitest"
import calculate from "./script.js"

describe("calculate", () => {
  test("should return the sum of two numbers", () => {
    expect(calculate(1, 2, "+")).toBe(3)
  })

  test("should return the difference of two numbers", () => {
    expect(calculate(1, 2, "-")).toBe(-1)
  })

  test("should return the product of two numbers", () => {
    expect(calculate(1, 2, "*")).toBe(2)
  })

  test("should return the quotient of two numbers", () => {
    expect(calculate(1, 2, "/")).toBe(0.5)
  })

  test("should return 0 when the operator is not valid", () => {
    expect(calculate(1, 2, "a")).toBe(0)
  })

  test("should return 0 when the operator is not a string", () => {
    expect(calculate(1, 2, 1)).toBe(0)
  })
})
