import { describe, test, expect } from "vitest"
import getNthFromString from "./script.js"

describe("getNthFromString", () => {
  test("getNthFromString - with two numbers", () => {
    expect(getNthFromString("abcd", 1)).toBe("a")
  })

  test("getNthFromString - with number and number as a string", () => {
    expect(getNthFromString("zyxbwpl", 5)).toBe("w")
  })

  test("getNthFromString - with two same strings", () => {
    expect(getNthFromString("gfedcba", 3)).toBe("e")
  })
})
