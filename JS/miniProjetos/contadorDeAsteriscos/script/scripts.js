//Construir uma função que exibe a quantidade de asteriscos que aquela linha possui

exibeAsteriscos(20)

function exibeAsteriscos(linhas) {
    let padrao = ''
    for (let linha = 1; linha <= linhas; linha++) {
        padrao += '*'
        console.log(padrao)
    }
}