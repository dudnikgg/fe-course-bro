import { describe, test, expect } from "vitest"
import getLarger from "./script.js"

describe("getLarger", () => {
  test("getLarger - with two numbers", () => {
    expect(getLarger(2, 1)).toBe(2)
  })

  test("getLarger - with number and number as a string", () => {
    expect(getLarger(1, "2")).toBe("2")
  })

  test("getLarger - with two same strings", () => {
    expect(getLarger("Denys", "Denys")).toBe("Denys")
  })

  test("getLarger - with two different strings", () => {
    expect(getLarger("Denys", "Dudnik")).toBe("Dudnik")
  })

  test("getLarger - with two same strings with different last symbol", () => {
    expect(getLarger("Denys", "Denyz")).toBe("Denyz")
  })

  test("getLarger - with two same strings with different first symbol", () => {
    expect(getLarger("Denys", "Cenys")).toBe("Denys")
  })
})
