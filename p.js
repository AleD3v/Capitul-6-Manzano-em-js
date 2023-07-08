/*Elaborar um programa que leia 12 elementos inteiros para
uma matriz A de uma dimensão do tipo vetor. Construir uma
matriz B de mesmos tipo e dimensão, observando a
seguinte lei de formação: “todo elemento da matriz A que for
ímpar deve ser multiplicado por 2; caso contrário, o
elemento da matriz A deve permanecer constante”.
Apresentar os elementos da matriz B.*/

const prompt = require(`prompt-sync`)()

let a = []
let b = []

for(let i = 0; i < 12; i++){
    let numb = parseInt(prompt(`Digite o ${i+1}º valor: `))
    let add = a.push(numb)

    if(numb % 2 != 0){
        add = b.push(numb*2)
    }else{
        add =  b.push(numb)
    }

}
console.log(`\nMatriz a: [${a}]`)
console.log(`Matriz b: [${b}]`)