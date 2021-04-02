//Escreva uma função que usa 2 números e retorna o maior entre eles
let frase = 'O maior numero é'

function comparaNumero(numero1,numero2) {
    if (numero1 > numero2) {
        return console.log(frase,numero1)
    }

    else if (numero2 > numero1) {
        return console.log(frase,numero2)
    }

    else {
        return console.log('Os números são iguais')
    }
}

comparaNumero(2,2)

function max(numero1,numero2) {
    return numero1 > numero2 ? numero1 : numero2
}

let maior = max(100,30)
console.log(maior)