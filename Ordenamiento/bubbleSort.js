function ordenDesc(array) {
    var n = array.length;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (array[j] < array[j + 1]) {
                var aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    return array;
}
var test = [1, 3, 5, 9, 8, 7, 4, 2, 6];
console.log("Arreglo original:", test);
var sortedArr = ordenDesc(test);
console.log("Arreglo ordenado de forma descendente:", sortedArr);
