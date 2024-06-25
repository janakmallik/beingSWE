class siteUser {
  constructor(userName) {
    this.userName = userName
  }

  logMe() {
    console.log(`username: ${this.userName}`)
  }

  static createId() {
    return `124`
  }
}

const janak = new siteUser('janakmallik')
// console.log(janak.createId())

class teacher extends siteUser {
  constructor(userName, email) {
    super(userName)
    this.email = email
  }
}

const ramesh = new teacher('ramesh', 'ramesh@th.com')
ramesh.logMe()


