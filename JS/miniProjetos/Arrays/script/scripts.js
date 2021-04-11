//Adicionando elementos em um Array
let numeros = [1,2,3,4]
//Inicio
numeros.unshift(0)

//Meio
numeros.splice(1,0,'a')

//Final
numeros.push(5)
console.log(numeros)

//Encontrando elementos primitivos
numeros = [1,2,3,4]
console.log(numeros.indexOf(3))

console.log(numeros.includes(8))

//Removendo elementos de um array

numeros = [1,2,3,4,5,6]
//Final
let ultimo = numeros.pop()
console.log(ultimo)
//Começo
let primeiro = numeros.shift()
console.log(primeiro)
//Meio
let meio = numeros.splice(2,1)
console.log(meio)
