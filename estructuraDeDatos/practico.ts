let maxNum: number = 0; // Variable global

const numbers: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];

// Retornar el número más grande de un array
function findMaxNum(arr: number[]): number {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Asignar el número más grande a la variable global
maxNum = findMaxNum(numbers);
console.log("El número más grande es: ", maxNum);

// Determinar si el número es par o impar
function parImpar(num: number): void {
    if (num % 2 === 0) {
        console.log(num, "es par.");
    } else {
        console.log(num, "es impar.");
    }
}

parImpar(maxNum);