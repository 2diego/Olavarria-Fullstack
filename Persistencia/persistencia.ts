/* Guarda la información de los siguientes arrays:

const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina",
"Queso"];
en un archivo “precios.txt” y “productos.txt”
respectivamente.
Luego recupera la información en forma de
array nuevamente y mostrala por consola. */

import * as fs from 'node:fs';

const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina",
"Queso"];

fs.writeFileSync("./precios.txt", precios.toString());
fs.writeFileSync("./productos.txt", productos.toString());

const preciosRec: number[] = fs.readFileSync("./precios.txt", "utf8").split(",").map(Number);;
const productosRec: string[] = fs.readFileSync("./productos.txt", "utf8").split(",");

console.log("Precios: " + precios + "\nPrecios recuperados: " + preciosRec + "\nProdcutos: " + productos + "\nProductos recuperados: " + productosRec);