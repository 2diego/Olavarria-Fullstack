import * as rls from "readline-sync";

console.log("Calculadora de potencias")

let base : number = rls.questionInt("Ingrese la base: ");
let exponente :number = rls.questionInt("Ingrese el exponente: ");

function calcularPotencia(base: number, exponente: number): number {
  let potencia = 1;

  if (exponente >= 0) {
      for (let i = 0; i < exponente; i++) {
          potencia *= base;
      }
  } else {
      console.log("El exponente debe ser mayor o igual a cero.");
  }

  return potencia;
}

const resultado = calcularPotencia(base, exponente);

if (exponente >= 0 && !isNaN(base) && !isNaN(exponente)) {
console.log(`La potencia de ${base} elevado a ${exponente} es ${resultado}`);
}