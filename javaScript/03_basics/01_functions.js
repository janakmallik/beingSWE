function add2Numbers(num1, num2){
  console.log(num1+num2)
}

const result = add2Numbers(3, 4)

console.log('result: ', result)


function add2Numbers(num1, num2){
  return num1+num2
}

const result2 = add2Numbers(3, 4)

console.log('result: ', result2)

function loginUserMessage(username = "sam"){
  if(!username){
      console.log("PLease enter a username");
      return
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

// rest operator
function claculateCartPrice(val1, val2, ...num1){
  return num1
}

console.log(claculateCartPrice(200, 400, 500, 200))


const user = {
  username: "hitesh",
  prices: 199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
// handleObject({
//   username: "sam",
//   price: 399
// })


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 1000]))

function firstOne(){
  const userName = 'janak'

  function secondOne(){
    const website ='github.com'

    console.log(userName)
  }

  // console.log(website)
  secondOne()
}

firstOne()

if (true) {
  const username = "hitesh"
  if (username === "hitesh") {
      const website = " youtube"
      console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);


console.log(addone(5))

function addone(num){
    return num + 1
}




const addTwo = function(num){
  return num + 2
}

console.log(addTwo(5))