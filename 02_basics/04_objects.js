// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = 'janak12'
tinderUser.name = 'janak mallik'
tinderUser.isLoggedIn = false

// console.log(tinderUser)

// const regularUser = {
//   email: 'janak@google.com',
//   fullName: {
//     userFullName: {
//       firstName: 'janak',
//       lastName: 'mallik'
//     }
//   }
// }

// console.log(regularUser.fullName.userFullName.firstName)

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// // const obj3 = { obj1, obj2 }
// // const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// // console.log(obj3);

const users = [
  {
      id: 1,
      email: "h@gmail.com"
  },
  {
      id: 1,
      email: "h@gmail.com"
  },
  {
      id: 1,
      email: "h@gmail.com"
  },
]

console.log(users[1].email)

console.log(tinderUser)

console.log(Object.keys(tinderUser))



console.log(Object.values(tinderUser))

console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isloggedIn'));
// console.log(tinderUser.hasOwnProperty('isloggedIn'));

const course = {
  courseName: 'js for everyone',
  price: 1234,
  courseInstructor: 'janak'
}

const {courseInstructor: instructor} = course
const {price} = course
const {courseName} = course

console.log(instructor)
console.log(price)
console.log(courseName)

{
  'name': 'janak'
  'courseName': 'js for everyOne'
  'price': null
}







