function imprimirArregloRec(arreglo:number[],indice:number, largo:number):number {
  if (indice<largo) {
  console.log(`posición ${indice} tiene: ${imprimirArregloRec(arreglo,indice+1,largo)}`);
  }
  return arreglo[indice-1];
  }

  imprimirArregloRec([1, 2], 0, 2);