function mapearArray(funcao, array) {
    return array.map(funcao);
}


console.log(mapearArray(x => x * 2, [1, 2, 3]));