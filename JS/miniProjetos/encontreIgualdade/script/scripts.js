// Igualdade de Objetos

function criarEndereço(rua,cidade,cep) {
    return {
    rua,
    cidade,
    cep
    }
}

const endereco1 = criarEndereço('Crateus','Guarulhos','07173080')
const endereco2 = criarEndereço('Camamu','Guarulhos','07173081')
console.log(endereco1.rua)
console.log(endereco2)

function saoIguaisPropriedade(endereco1,endereco2) {
    return endereco1.rua === endereco2.rua &&
    endereco1.cidade === endereco2.cidade &&
    endereco1.cep === endereco2.cep

}

console.log(saoIguaisPropriedade(endereco1,endereco2))