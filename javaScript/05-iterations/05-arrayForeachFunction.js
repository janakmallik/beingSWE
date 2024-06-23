const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
  console.log(item, index, arr)
})

const codingLang = [
  {
    languageName: "javascript",
    languageFile: "js",
  },
  {
    languageName: "python",
    languageFile: "py",
  },
  {
    languageName: "Cpp",
    languageFile: "cpp",
  },
]

codingLang.forEach((item) => {
  console.log(item.languageName)
})

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

const newNums = [1, 3, 4, 5, 6, 7, 8, 9, 8]

console.time("filterNums")
const filterNums = newNums.filter((num) => num > 5)
console.timeEnd("filterNums")
console.log(filterNums)

console.time("filterNums2")
const filterNums2 = newNums.filter((num) => {
  return num > 5
})
console.timeEnd("filterNums2")
console.log(filterNums2)

console.time("filterNums3")
const filterNums3 = []
newNums.forEach((num) => {
  if (num > 5) {
    filterNums3.push(num)
  }
})
console.timeEnd("filterNums3")
console.log(filterNums3)

// filterNums: 0.087ms
// [ 6, 7, 8, 9, 8 ]
// filterNums2: 0.028ms
// [ 6, 7, 8, 9, 8 ]
// filterNums3: 0.034ms
// [ 6, 7, 8, 9, 8 ]

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
]

let userBooks = books.filter(
  (bk) => bk.publish >= 1995 && bk.genre === "History"
)

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks)





