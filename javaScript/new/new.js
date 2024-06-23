// https://tc39.es/ecma262/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript

console.log('janak');

const accountId = 14433
let accountEmail = 'contact@janakmallik.com'
var accountPassword = '21jkIO-23'
accoutCity = 'Dhaka'
let accountState;
let accountName = null

/* 
prefer not to use var
because of issue in block scope and functional scope
*/

// accountId = 21
accountEmail = 'info@janakmallik.com'
accountPassword = '21jkIO-24'
accoutCity = 'Rampura'

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accoutCity, accountState, accountName])

