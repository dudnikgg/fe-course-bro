import { describe, test, expect } from "vitest"
import printPattern from "./script"

describe("printPattern", () => {
  test("should print pattern of numbers", () => {
    expect(printPattern(5)).toEqual(`1
                                    1 2
                                    1 2 3
                                    1 2 3 4
                                    1 2 3 4 5`)
    expect(printPattern(3)).toEqual(`1
                                    1 2
                                    1 2 3`)
    expect(printPattern(1)).toEqual("1")

    expect(printPattern(0)).toEqual("")

    expect(printPattern(-1)).toEqual("")
  })
})
