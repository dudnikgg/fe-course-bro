import { describe, test, expect } from 'vitest'
import checkPin from "./script.js"

describe("checkPin", function () {
  test("should return False for pins with length other than 4 or 6", function () {
    expect(checkPin("1")).toBe(false)
    expect(checkPin("12")).toBe(false)
    expect(checkPin("123")).toBe(false)
    expect(checkPin("12345")).toBe(false)
    expect(checkPin("1234567")).toBe(false)
    expect(checkPin("-1234")).toBe(false)
    expect(checkPin("1.234")).toBe(false)
    expect(checkPin("-1.234")).toBe(false)
    expect(checkPin("00000000")).toBe(false)
  })

  test("should return False for pins which contain characters other than digits", function () {
    expect(checkPin("a234")).toBe(false)
    expect(checkPin(".234")).toBe(false)
  })

  test("should return True for valid pins", function () {
    expect(checkPin("1234")).toBe(true)
    expect(checkPin("0000")).toBe(true)
    expect(checkPin("1111")).toBe(true)
    expect(checkPin("123456")).toBe(true)
    expect(checkPin("098765")).toBe(true)
    expect(checkPin("000000")).toBe(true)
    expect(checkPin("123456")).toBe(true)
    expect(checkPin("090909")).toBe(true)
  })
})
