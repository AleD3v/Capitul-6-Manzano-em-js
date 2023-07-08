/*Elaborar um programa que leia uma matriz A de uma
dimensão com seis elementos do tipo real. Construir uma
matriz B, em que cada posição de índice ímpar da matriz B
deve ser atribuída com um elemento de índice par existente
na matriz A e cada posição de índice par da matriz B deve
ser atribuída com um elemento de índice ímpar existente na
matriz A. Apresentar os elementos das duas matrizes.*/

const prompt = require(`prompt-sync`)()

let a = [], b = []

for (let i = 0, k = 0; i < 6; i++, k++){
    
    let num = parseInt(prompt(`Digite o ${i+1}º valor: `))
    let add = a.push(num)

    if (i % 2 == 0){

        b[k+1] = a[i]
    }else{

        b[k-1] = a[i]
    }
}
console.log(`\nMatriz a: [${a}]`)
console.log(`Matriz b: [${b}]`)