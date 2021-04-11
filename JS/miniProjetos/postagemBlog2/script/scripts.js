function Postagem(titulo,autor,mensagem) {
    this.titulo = titulo,
    this.autor = autor,
    this.mensagem = mensagem,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.aoVivo = false
}

let postagem = new Postagem('a','b','c')

console.log(postagem)