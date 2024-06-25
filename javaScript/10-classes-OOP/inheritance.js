class user {
  constructor(userName) {
    this.userName = userName
  }

  logMe() {
    console.log(`username is ${this.userName}`)
  }
}

class teacher extends user {
  constructor(userName, email, password) {
    super(userName)
    this.email = email
    this.password = password
  }

  addCourse() {
    console.log(`a new course was added be ${this.userName}`)
  }
}

const janak = new teacher('janak', 'janak@gmail.com', 4325)

janak.addCourse()

const newJanak = new user('janaknew')

newJanak.logMe()
janak.logMe()

console.log(newJanak===janak)
console.log(newJanak instanceof user)
console.log(janak instanceof user)
console.log(janak instanceof teacher)