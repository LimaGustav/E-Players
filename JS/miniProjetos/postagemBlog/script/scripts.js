function criarPostagem(titulo, mensagem, autor, vizualizacoes, comentario, autorComentario, mensagemComentario, aoVivo) {
    return {titulo,
    mensagem,
    autor,
    vizualizacoes,
    comentario : [
        {autorComentario, mensagemComentario}
    ],
    aoVivo}
}

const postagem = criarPostagem('Boas Vindas','Boa tarde', 'Gustavo',157,'1','Bruno','Muito Bom', true)

console.log(postagem)