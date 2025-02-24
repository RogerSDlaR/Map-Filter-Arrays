let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosX2 = numeros.map(function (numeros) {
    return numeros ** 2;
})

let mayores40 = numerosX2.filter(function (numeros) {
    return numeros > 40;
})


console.log(numerosX2)
console.log("Los números mayores a 40 son:", mayores40)

