import Codebreaker from "./codebreaker";

const numero = document.querySelector("#numero");
const form = document.querySelector("#form-adivinar");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numeroAleatorio = obtenerNumeroAleatorio()

  const cb = new Codebreaker("5555");
  const mensaje = cb.adivinar("5555");
  resultado.innerHTML = mensaje;
});


function obtenerNumeroAleatorio(maximo) {
  return Math.floor(Math.random() * maximo)
}