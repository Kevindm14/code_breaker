import Codebreaker from "./codebreaker";

describe("Codebreaker logica", () => {
  it("indica que gane cuando adivino el codigo secreto", () => {
    const cb = new Codebreaker("5555");
    const mensaje = cb.adivinar("5555");
    expect(mensaje).toEqual("Ganaste!");
  });
});
