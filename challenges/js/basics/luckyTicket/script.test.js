import { describe, test, expect } from "vitest"
import checkTicket from "./script.js"

describe("checkTicket", () => {
  test("checkTicket - with lucky ticket", () => {
    expect(checkTicket("005212")).toBe(true)
  })

  test("checkTicket - with unlucky ticket", () => {
    expect(checkTicket("133700")).toBe(true)
  })

  test("checkTicket - with unlucky ticket", () => {
    expect(checkTicket("123032")).toBe(false)
  })
})
