import Codebreaker from "./codebreaker";

const numero = document.querySelector("#numero");
const form = document.querySelector("#form-adivinar");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numeroAleatorio = obtenerNumeroAleatorio()

  const cb = new Codebreaker(numero.value);
  const mensaje = cb.adivinar(numero.value);
  resultado.innerHTML = mensaje;
});


function obtenerNumeroAleatorio(maximo) {
  return Math.floor(Math.random() * maximo)
}