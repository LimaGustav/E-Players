let faixas = [
    {tooltip : 'Até R$700', minimo : 0, maximo : 700},
    {tooltip : 'de R$701 até 1000', minimo : 701, maximo : 1000},
    {tooltip : 'de R$1001 até 1500', minimo : 1001, maximo : 1500},
    {tooltip : 'de R$1501 até 3000', minimo : 1501, maximo : 3000}
]

// Factory Function 

function CriaFaixa(tooltip,minimo,maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    CriaFaixa('Até 800', 0, 800)
]

console.log(faixas2)

console.log(faixas)