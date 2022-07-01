import fs from "fs";

describe("Codebreaker UI", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("codebreaker.html", "utf8");
    require("../codebreaker/presenter");
  });

  afterEach(() => {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";
  });

  it("mostrar el nombre del juego", () => {
    const h1 = document.querySelector("#titulo");
    expect(h1.innerHTML).toEqual("Codebreaker");
  });

  it("No muestra ningun mensaje de ganador al iniciar", () => {
    const resultado = document.querySelector("#resultado");
    expect(resultado.innerHTML).toEqual("");
  });

  // it("adivino con codigo ganador", () => {
  //   const numero = document.querySelector("#numero");
  //   const form = document.querySelector("#adivinar-submit");
  //   const resultado = document.querySelector("#resultado");
  //   numero.value = "5";
  //   form.click();
  //   expect(resultado.innerHTML).toEqual("Ganaste!");
  // });

  it("adivino con codigo ganador con 4 digitos", () => {
    const numero = document.querySelector("#numero");
    const form = document.querySelector("#adivinar-submit");
    const resultado = document.querySelector("#resultado");
    numero.value = "5555";
    form.click();
    expect(resultado.innerHTML).toEqual("Ganaste!");
  });

  it("mostrar nombre del juego en el titulo del documento", () => {
    const tituloDocumento = document.querySelector("title")
    expect(tituloDocumento.innerHTML).toEqual("Codebreaker");
  })
});
