const marvel = ['iron man', 'thor', 'hulk']
const dc = ['superman', 'batman', 'flash']
const desk = ['laptop', 'monitor']

// marvel.push(dc)
// console.log(marvel)

allHeros = marvel.concat(dc)
console.log(allHeros)

// spread operator
const allHeros2 = [...marvel, ...dc, ...desk]
console.log(allHeros2)

const newArray = [1, 2, 3, 4, [2, 4, 5, 7,[2, 4, 4, 3], 3, 4], 3, 4]
const newArray2 = newArray.flat(1)
// const newArray2 = newArray.flat(3)
// const newArray2 = newArray.flat(Infinity)

console.log(newArray2)


console.log(Array.isArray('janak'))
console.log(Array.from('janak'))
console.log(Array.from({name:'janak'}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))


