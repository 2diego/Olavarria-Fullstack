var myString = "AIOEUS45UEODSQ4032ATYVPASVWETGASZ";
var contadorAEO = [0, 0, 0];
for (var i = 0; i < myString.length; i++) {
    if (myString[i].toUpperCase() == "A") {
        contadorAEO[0]++;
    }
    else if (myString[i].toUpperCase() == "E") {
        contadorAEO[1]++;
    }
    else if (myString[i].toUpperCase() == "O") {
        contadorAEO[2]++;
    }
}
console.log(contadorAEO);
