// Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é par ou impra

const mensagem = parOuImpar(30)
console.log(mensagem)

function parOuImpar(numero) {
    for (let i = 0; i < numero+1; i++) {
        if (i % 2 === 0) {
            console.log(i, 'PAR')
        }
        else console.log(i, 'IMPAR')
    }
}