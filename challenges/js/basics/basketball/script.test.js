import { describe, test, expect } from "vitest"
import getWinner from "./script.js"

describe("getWinner", () => {
  test("should return the winner", () => {
    expect(getWinner(["36-32", "32-24", "20-28", "30-26"])).toBe("Team 1")
    expect(getWinner(["23-26", "24-30", "30-27", "35-31"])).toBe("Team 2")
  })

  test("should return undefined in case of a draw", () => {
    expect(getWinner(["36-18", "22-31", "27-21", "19-34"])).toBe("undefined")
  })

  test("should return undefined if the input is not an array", () => {
    expect(getWinner("36-18")).toBe("undefined")
  })

  test("should return undefined if the input is an empty array", () => {
    expect(getWinner([])).toBe("undefined")
  })

  test("should return undefined if the input is an array with a single element", () => {
    expect(getWinner(["36-18"])).toBe("undefined")
  })
})
