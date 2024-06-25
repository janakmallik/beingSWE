// after ES6
class user {
  constructor(userName, email, password) {
    this.userName = userName
    this.email = email
    this.password = password
  }

  encryptPassword() {
    return `${this.password}abc`
  }

  changeUserName() {
    return `${this.userName.toUpperCase()}`
  }
}

const coffeeShop = new user('janak', 'janak@google.com', '534543')

console.log(coffeeShop.encryptPassword())
console.log(coffeeShop.changeUserName())

// behind the scene
function user(userName, email, password) {
  this.userName = userName
  this.email = email
  this.password = password
}

user.prototype.encryptPassword = function () {
  return `${this.password}abc`
}

user.prototype.changeUserName = function () {
  return `${this.userName.toUpperCase()}`
}

const teaStall = new user('janak', 'janak@google.com', '534543')

console.log(teaStall.encryptPassword())
console.log(teaStall.changeUserName())
