import codebreaker from "./codebreaker"
import fs from 'fs'

describe("Code breaker", () => {
  it("Que muestre el titulo", () => {
    document.body.innerHTML = fs.readFileSync("codebreaker.html", "utf8");
    const h1 = document.querySelector("#titulo");

    expect(h1.innerHTML).toEqual("Codebreaker");
  })
})

