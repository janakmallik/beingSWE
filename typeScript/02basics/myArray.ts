// Argument of type 'string' is not assignable to parameter of type 'never'.
// const superHeros = []
// const superHeros: [] = []

// proper approach
const superHeros: string[] = []

// both are same
// const heroPower: number[] = []
const heroPower: Array<number> = []


type user = {
  name: string
  isActive: boolean
}

const allUsers: user[] = []

const MLModels: number[][] = [[255, 255, 255], []]

superHeros.push('spiderman')
heroPower.push(2)


// allUsers.push({ }) this is not allowed as this does follows the type as user
allUsers.push({ name: 'janak', isActive: true })


