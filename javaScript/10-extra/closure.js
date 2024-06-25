function makeFunc() {
  const productName = 'Mozilla'
  function displayName() {
    console.log(productName)
  }
  return displayName
}

const myFunc = makeFunc()
myFunc()
