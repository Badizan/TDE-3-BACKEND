function filtrarArray(funcaoFiltro, array) {
    return array.filter(funcaoFiltro);
}


console.log(filtrarArray(x => x > 3, [1, 2, 3, 4, 5]));