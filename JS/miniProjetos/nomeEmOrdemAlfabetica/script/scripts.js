//Escreva um nome e o coloque em ordem alfabética

let nome = 'yasmim'

nomes = nome.split(' ')

console.log(organizaEmOrdemAlfabetica(nomes))
console.log(nomes.length)

function organizaEmOrdemAlfabetica(obj) {
    let salva = {}
    for (let i = 0; i < obj.length; i++) {
        salva += obj[i].split('').sort().join('')
        salva += ' '
    }
    return salva
}