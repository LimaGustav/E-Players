let nome = 'Gustavo'
let idade = 18
let idioma = 'Português'
let sobrenome
let redefinir = null //Null é usado para redefinir os valores
console.log("Ola",nome,"Você tem",idade,"anos","e fala",idioma)

let pessoa = {
    nome,idade,idioma,sobrenome
}

console.log(pessoa)

//Arrays

let familia = [
    pessoa
]

let sequencia = [
    0,2,4,6,8,10,12
]

console.log(familia)
console.log(sequencia[4])

//Função
//Verbo ++ Substantivo
let corSite = 'azul'

function reseta_cor(cor,tonalidade) {
    corSite = cor + tonalidade;
}

function reseta_tamanho(blusa,calça) {
    blusaTamanho = blusa
    calçaTamanho = calça
}

console.log(corSite)
reseta_cor('Verde',' claro')
console.log(corSite)

let blusa = 50
let calça = 40

console.log("blusa",blusa,'Calça',calça)

reseta_tamanho(0,0)

console.log("blusa",blusaTamanho,'Calça',calçaTamanho)

//Tipos de Funções

//Realiza tarefa, não devolve nada

function dizerNome(){
    console.log(nome)
}

dizerNome()

//Realiza tarefa e devolve o resultado

function multiplicarPor2(valor){
    return valor * 2
}

console.log(multiplicarPor2(30))
let resultado = multiplicarPor2(60)
console.log(resultado)


//Operadores

//Operadores Matemáticos
// +, -, *, /, **

function pitagorasHipo(opo,adja){
    hipo = opo**2 + adja**2
    hipo = Math.sqrt(hipo)
    return hipo 
}

console.log(pitagorasHipo(3,4))
//Operadores de atribuição
// = e (operador)=

idade = 18
console.log(idade += idade)

//Operadores de Igualdade
console.log(1 === 1) //Compara o Número e também o tipo
console.log('1' === 1)

console.log(1 == "1") //Compara apenas os Valores

//Operador ternario

let pontos = 20
let tipo = pontos > 99 ? "Premium" : "Comum"
console.log(tipo)

//Operador logico (&&) - (and)
//Operador logico (||) - (or)
//Operador logico (!) - (not)

let maiorIdade = true
let possuiCarteira = false

podeAplicar = maiorIdade && possuiCarteira

console.log("Canditado pode aplicar",podeAplicar)

reprovado = !podeAplicar

console.log('Canditado foi reprovado',reprovado)

//Exercicio trocar cores

let cor = 'Vermelho'
let cor2 = 'Azul'

let cores = [
    cor,
    cor2
]

cor = cores[1]
cor2 = cores[0]

console.log(cor)
console.log(cor2)

//If e Else

horario = 12
    
if (horario < 12) {
    console.log('Bom dia', nome)
}

else if (horario >= 12 && horario < 18) {
    console.log('Boa tarde', nome)
}

else if (horario >= 18 && horario <= 24) {
    console.log ('Boa noite', nome)
}

else {
    console.log('Este horario não existe')
}


//Switch... Case

let permissao 

switch (permissao) {
    case 'comun' :
        console.log('Usuario Comun')
    break

    case 'gerente':
        console.log('Gerente')
    break

    case 'diretor':
        console.log('Diretor')
    break
}
