export default class Codebreaker {
  adivinar(numero) {
    if (numero.length == 4){
      return "Ganaste!";
    }
    return "Sigue intentando!"
  }
}
