"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
console.log("Calculadora de potencias");
var base = rls.questionInt("Ingrese la base: ");
var exponente = rls.questionInt("Ingrese el exponente: ");
function calcularPotencia(base, exponente) {
    var potencia = 1;
    if (exponente >= 0) {
        for (var i = 0; i < exponente; i++) {
            potencia *= base;
        }
    }
    else {
        console.log("El exponente debe ser mayor o igual a cero.");
    }
    return potencia;
}
var resultado = calcularPotencia(base, exponente);
if (exponente >= 0 && !isNaN(base) && !isNaN(exponente)) {
    console.log("La potencia de ".concat(base, " elevado a ").concat(exponente, " es ").concat(resultado));
}
