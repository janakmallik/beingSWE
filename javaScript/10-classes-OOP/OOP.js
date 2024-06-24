const user = {
  username: 'hitesh',
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this)
  },
}

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

function User(userName, loginCount, isLoggedIn) {
  this.userName = userName
  this.loginCount = loginCount
  this.isLoggedIn = isLoggedIn

  this.greeting = function () {
    console.log('welcome ${this.userName}')
  }

  // return this
}

// const userA = User("janak", 12, true)
const userA = new User('janak', 12, true)
const userB = new User('samay', 43, false)

console.log(userA.constructor)
// console.log(userB)
