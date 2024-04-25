function gerarLista(n, funcaoGeracao) {
    const lista = [];
    for (let i = 0; i < n; i++) {
        lista.push(funcaoGeracao(i));
    }
    return lista;
}

console.log(gerarLista(5, index => index * 2));