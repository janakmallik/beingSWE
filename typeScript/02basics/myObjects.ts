const User = {
  name: 'janak',
  email: 'janak@mail.com',
  isActive: true
}

function createUser({ name: string, isPaid: boolean }) { }

// createUser()
// createUser({ name: 'sabo', isPaid: false })

// again
let newUser = { name: 'janak', isPaid: false, email: 'janak@mail.com' }

createUser(newUser)

// function createCourse(fuction parameter): {return type} {
//   this is a definaiton
//   return {}
// }

function createCourse(): { name: string, price: number } {
  return { name: 'SWE', price: 399 }
}

export { } 
