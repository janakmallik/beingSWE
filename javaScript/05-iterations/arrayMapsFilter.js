const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map((num) => {
  return num + 10
})
console.log(newNums)

const newNums2 = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40)

console.log(newNums2)

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
]

const priceToPay = shoppingCart.reduce(function (accumulator, currentItem) {
  console.log(`acc: ${accumulator} and currval: ${currentItem.price}`)
  return accumulator + currentItem.price
}, 0)

console.log(priceToPay)
