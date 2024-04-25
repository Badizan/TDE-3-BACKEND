function encontrarMaiorElemento(array) {
    if (array.length === 0) return undefined;
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}


console.log(encontrarMaiorElemento([1, 5, 3, 9, 2]));