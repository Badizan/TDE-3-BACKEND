function somaElementosPares(array) {
    return array.reduce((acc, current) => current % 2 === 0 ? acc + current : acc, 0);
}

console.log(somaElementosPares([1, 2, 3, 4, 5]));