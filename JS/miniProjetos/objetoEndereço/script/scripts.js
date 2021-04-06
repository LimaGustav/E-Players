// Criar um objeto endereço que contem:
// Rua
// Cidade
// CEP
// exibirEndereço(endereco)

function cadastrarEndereço(rua, cidade, cep) {
    return {
        rua,
        cidade,
        cep
    }
}

function exibirEndereço(endreco) {
    for (valor in endereco) {
        console.log(valor, endereco[valor])
    }
}

endereco = cadastrarEndereço('Crateus','Guarulhos','07173080')
exibirEndereço(endereco)