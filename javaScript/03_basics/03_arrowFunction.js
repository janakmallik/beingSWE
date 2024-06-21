const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function() {
      console.log(`${this.username} , welcome to website`);
      console.log(this);
  }

}

user.welcomeMessage()
user.username = "sam"
user.price = 333
user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
  let username = "hitesh"
  console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


const coffee = () => {
  console.log(this);
}

coffee()


// const add2Numbers = (num1, num2) => (num1 +num2)
const add2Numbers = (num1, num2) => ({username: "janak"})

console.log(add2Numbers(4, 5))