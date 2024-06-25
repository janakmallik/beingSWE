let myname = 'janak      '

// console.log(myname.trueLength)
// console.log(myname.length)

let myHero = ['thor', 'spiderMan']

let heroPower = {
  thor: 'hammer',
  spiderMan: 'sling',

  getSpiderPower: function () {
    console.log('spidy power is ${this.spiderMan')
  }
}

// adding an function to top level hierarchy to give access to all objects
Object.prototype.ownFunction = function () {
  console.log('this is an own created function to give access to all objects')
}

// adding an function to top level hierarchy to give access to all arrays
Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`)
}

heroPower.ownFunction()
myHero.ownFunction()
myHero.heyHitesh()
// so heroPower does not have the access to heyHitesh as hierarchically arrays are below objects
// heroPower.heyHitesh()

let newUserName = 'janak        '

String.prototype.trueLength = function () {
  console.log(`${this}`)
  console.log(`${this.name}`)
  console.log(`true length is: ${this.trim().length}`)
}

newUserName.trueLength()
console.log(`total length is: ${newUserName.length}`)
'ronaldo   '.trueLength()