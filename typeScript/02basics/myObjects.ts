// const user = {
//   name: 'janak',
//   email: 'janak@mail.com',
//   isActive: true
// }

// function createUser({ name: string, isPaid: boolean }) { }

// // createUser()
// // createUser({ name: 'sabo', isPaid: false })

// // again
// let newUser = { name: 'janak', isPaid: false, email: 'janak@mail.com' }

// createUser(newUser)

// // function createCourse(fuction parameter): {return type} {
// //   this is a definaiton
// //   return {}
// // }

// function createCourse(): { name: string, price: number } {
//   return { name: 'SWE', price: 399 }
// }

type User = {
  // readonly make this read only
  readonly _id: string
  name: string
  email: string
  isActive: boolean
  // the ? mark here make this optional to have under this type
  credcardDetails?: number
}

let myUser: User = {
  _id: '1245',
  name: 'h',
  email: 'h@h.com',
  isActive: false
}

type cardNumber = {
  cardnumber: string
}

type cardDate = {
  cardDate: string
}

type cardDetails = cardNumber &
  cardDate & {
    cvv: number
  }

myUser.email = 'h@gmail.com'
// myUser._id = "asa"

export { }
