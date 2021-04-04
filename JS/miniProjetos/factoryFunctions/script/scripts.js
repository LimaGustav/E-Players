function criarPessoa(nome,idade,sexo,profissao){
    return {
        nome,
        idade,
        sexo,
        profissao
    }
}

console.log(criarPessoa('Gustavo',18,'m','Programador'))

//Construtor

function Pessoa(nome,idade,sexo,profissao){
    this.nome = nome,
    this.idade = idade,
    this.sexo = sexo,
    this.profissao = profissao
    this.concluido = function mensagemConclusão() {
        console.log('Usuario Cadastrado')
    }
}
 
const pessoa1 = new Pessoa('Paulo',20,'m','Estagiário')
console.log(pessoa1)