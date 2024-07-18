function imprimirArregloRec(arreglo, indice, largo) {
    if (indice < largo) {
        console.log("posici\u00F3n ".concat(indice, " tiene: ").concat(imprimirArregloRec(arreglo, indice + 1, largo)));
    }
    return arreglo[indice - 1];
}
imprimirArregloRec([1, 2], 0, 2);
