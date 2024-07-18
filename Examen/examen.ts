// 2 //
let myString: string = "AIOEUS45UEODSQ4032ATYVPASVWETGASZ";

let contadorAEO: number[] = [0, 0, 0]

for (let i = 0; i < myString.length; i++) {
  if (myString[i].toUpperCase() == "A") {
    contadorAEO[0]++;    
  } else if (myString[i].toUpperCase() == "E") {
    contadorAEO[1]++;
  } else if (myString[i].toUpperCase() == "O") {
    contadorAEO[2]++;
  }
}

console.log(contadorAEO)

// 3 //

function sumarArreglo(arreglo: number[]): number {
  let suma: number = 0;
  for ( let i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
  }
  return suma;
}

// 4 //

function colorPorNota(valor: number): string {
  if (valor >= 0 && valor < 7) { 
      return 'rojo';
  } else if (valor >= 7 && valor <= 10) {
      return 'verde';
  }
  return 'gris';
}

// 5 //

function obtenerPromedio(arr: number[]): void {    
  let suma: number = sumarArreglo(arr);
  let promedio: number = suma / arr.length;
  console.log(promedio);
}