//Criar função somar que soma e retorna os multiplos de 3 e 5

mensagem = somar(30)
console.log(mensagem)

function somar(numero) {
    let total = 0
    for (let i = 0; i < numero+1; i++) {
        if (i % 3 === 0) {
            total += i
        }
        if (i % 5 === 0) {
            total += i
        }
    }
    return (total)
}