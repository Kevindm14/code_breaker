import rovers from "./rovers"

describe("Posicion inicial", () => {
  it("mostrar la posicion inicial", () => {
    const roversObject = new rovers()

    expect(roversObject.ejecutar("")).toEqual("0,0N");
  })

  // it("mostrar posicion del rovers en 2,3N", () => {
  //   const roversObject = new rovers()

  //   expect(roversObject.ejecutar("AADAAIA")).toEqual("2,3N");
  // })
})
