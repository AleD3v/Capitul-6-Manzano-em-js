const prompt = require('prompt-sync')()

var names = []

for(var i = 0; i<10; i++){
    var name = prompt(`Digite o ${i+1}º nome: `)
    var add = names.push(name)
}

console.log(`\nNomes digitados:`)
for (name of names){
    console.log(name)
}
/*for(var i = 0; i < names.length; i++){
    console.log(names[i])
}*/