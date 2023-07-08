/*Elaborar um programa que leia duas matrizes A e B de uma
dimensão com 12 elementos. A matriz A deve aceitar
apenas a entrada de valores divisíveis por 2 ou 3, enquanto
a matriz B deve aceitar apenas a entrada de valores que
não sejam múltiplos de 5. A entrada das matrizes deve ser
validada pelo programa, e não pelo usuário. Construir uma
matriz C que seja o resultado da junção das matrizes A e B,
de forma que contenha 24 elementos. Apresentar os
elementos da matriz C.*/

const prompt = require(`prompt-sync`)()
let a = []
let b = []
let c = []
for(let i = 0; i < 24; i++){
    let numb = parseInt(prompt(`Digite o ${i+1}º valor: `))

    if(numb % 2 == 0 && numb % 3 == 0){
        let add = a.push(numb)
    }
    if(numb % 5 != 0){
        add = b.push(numb)
    }
}
console.log(`\nMatriz a: [${a}]`)
console.log(`Matriz b: [${b}]`)
c.unshift(a, b)
console.log(`Matriz c: [${c}]`)