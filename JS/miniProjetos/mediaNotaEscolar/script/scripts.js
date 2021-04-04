//Obter média a partir de um Array

//0-59: F
//60-69: E
//70-79: D
//80-89: C
//90-100: A

const notas = [100,80,90,50,20]

console.log(mediaDoAluno(notas),notaDoAluno(notas))

function mediaDoAluno(valores) {
    let media = 0
    let numeroDivisor = valores.length
    for (valor of valores) {
        media += valor
    }
    return media/numeroDivisor
}

function notaDoAluno(media) {
    media = mediaDoAluno(notas)
    if (media < 60) return 'F'
    if (media < 70) return 'E'
    if (media < 80) return 'D'
    if (media < 90) return 'C'
    else return 'A'
}