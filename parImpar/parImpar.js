"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numero = rls.questionInt("Ingrese su numero: ");
if (numero == 0) {
    console.log("Su número es 0");
}
else if (numero % 2 == 0) {
    console.log("Su número es par");
}
else if (numero % 2 != 0) {
    console.log("Su número es impar");
}
