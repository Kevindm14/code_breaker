import stringCalculator from "./calculadora";

describe("String Calculator", () => {
    it("cadena vacia", () => {
        const resultado = stringCalculator("")
        expect(resultado).toEqual(0)
    })

    it("un solo numero", () => {
        const resultado = stringCalculator("5")
        expect(resultado).toEqual(5)
    })

    it("suma de dos numeros", () => {
        const resultado = stringCalculator("4+5")
        expect(resultado).toEqual(9)
    })

    it("suma de tres o mas numeros", () => {
        const resultado = stringCalculator("4+5+7+9")
        expect(resultado).toEqual(25)
    })





    it("Resta", () => {
        const resultado = stringCalculator("2-2")
        expect(resultado).toEqual(0)
    })
})