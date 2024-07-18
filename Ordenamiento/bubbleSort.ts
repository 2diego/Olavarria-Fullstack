function ordenDesc(array: number[]): number[] {
  let n: number = array.length;
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i -1; j++) {
          if (array[j] < array[j + 1]) {
              let aux = array[j];
              array[j] = array[j + 1];
              array[j + 1] = aux;
          }
      }
  }
  return array;
}

const test: number[] = [1, 3, 5, 9, 8, 7, 4, 2, 6];
console.log("Arreglo original:", test);
const sortedArr = ordenDesc(test);
console.log("Arreglo ordenado de forma descendente:", sortedArr);