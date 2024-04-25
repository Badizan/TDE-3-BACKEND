function validarDados(funcaoValidacao, objeto) {
    return funcaoValidacao(objeto);
}

const objetoExemplo = {
    nome: "João",
    idade: 25
};

const funcaoValidacao = (objeto) => objeto.nome.length > 3 && objeto.idade >= 18;

console.log(validarDados(funcaoValidacao, objetoExemplo));