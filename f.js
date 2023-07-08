var i, a = [], b = [], c = []

for(i = 1; i <= 15; i++){
    add = a.push(i)
    add = b.push(i+15)
}
console.log(`Este é o array a: [${a}]`)
console.log(`Este é o array b: [${b}]`)
c.unshift(a, b)
console.log(`Este é o array c: [${c}]`)