
function exibePrimo(numero) {
    for (let i = 2; i <= numero; i++) {
        ehPrimo = true
        if (testaPrimo(i)) {console.log(i)}
    }
}

function testaPrimo(numero) {
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false
        }
    }
    return true
}

exibePrimo(100)