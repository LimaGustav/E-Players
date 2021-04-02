//Divisível por 3 -> Fizz
//Divisível por 5 -> Buzz
//Divisível por 3 e 5 -> FizzBuzz
//Não divisível por nem 3 nem 5 -> proprio valor (entrada)
//Não é um número -> MSG "Não é um número"

function fizzbuzz(numero) {
    if (typeof numero !== 'number') {
        return 'Não é um número'
    }

    else if (numero % 3 === 0 && numero % 5 === 0) {
        return 'FizzBuzz'
    }

    else if (numero % 3 === 0) {
        return 'Fizz'
    }

    else if (numero % 5 === 0) {
        return 'Buzz'
    }

    return numero
}

const resultado = fizzbuzz(15)
console.log(resultado)