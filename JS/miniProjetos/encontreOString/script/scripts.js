// Criar um metodo para ler propriedades de um objeto
// Exibir somente as propriedades do tipo string deste objeto

let filme = {
    titulo :'vingadores',
    ano : 2016,
    diretor : 'não sei',
    assisti : 'sim',
}

mostraString(filme)

function mostraString(obj) {
    for (i in obj) {
        if (typeof obj[i] == 'string') {
            console.log(i, obj[i])
        }
    }
}