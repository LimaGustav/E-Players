//Velocidade maxima 70km/h
//A cada 5 km acima do limite você recebe 1 ponto na carteira
//math.floor()
//Caso os pontos sejam maior que 12 a carteira é suspendida

const mensagem = velocidadeMax(180)
console.log(mensagem)


function velocidadeMax(velocidade) {
    const velocidadeMaxima = 70
    const suspendeCarteira = 12
    const kmPorPonto = 5
    if (velocidade <= velocidadeMaxima) {
        return 'okay'
    }

    else if (velocidade > velocidadeMaxima) {
        exedido = velocidade - velocidadeMaxima
        pontos = exedido / kmPorPonto
        pontos = Math.floor(pontos)
        if (pontos >= suspendeCarteira) {
            return 'Sua carteira foi suspensa'
        }
        if (pontos < suspendeCarteira) {
            return 'Você levou ' + pontos + ' ponto(s)'
        }
        }
        
    }
console.log(typeof pontos)