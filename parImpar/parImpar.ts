import * as rls from 'readline-sync';

let numero : number = rls.questionInt("Ingrese su numero: ");

if (numero == 0) {
  console.log("Su número es 0");
} else if ( numero % 2 == 0) {
  console.log("Su número es par");
} else if (numero % 2 != 0) {
  console.log ("Su número es impar");
}