// interface
// makes things compolsury to add in extends..ers

// define a contract for objects. It specifies the properties and methods that an
// object must implement if it implements that interface. Interfaces are purely a
// compile-time construct and are used for type-checking and ensuring that objects have
// specific shapes (properties and methods).

interface trialUser {
  siteId: number
  email: string
  userId: number
  googleId?: string
  startTrail: () => string
  // also possible
  // startTrail(): string
  getCoupon(couponName: string, value: number): number
}

interface trialUser {
  githubToken: string
}

// inheritance
interface adminAccount extends trialUser {
  role: 'admin' | 'ta' | 'learner'
}

// you also can; interface adminAccount extends trialUser, another..{}

const adminJanak: adminAccount = {
  siteId: 4353,
  role: 'admin',
  email: 'janak@jj.jj',
  userId: 435,
  githubToken: 'git2353',
  startTrail: () => {
    return 'trail started'
  },
  // even this also possible; getCoupon: (newName: 'HelloSite..!') =>.....
  getCoupon: (couponName: 'HelloSite..!', value: 43) => {
    return 10
  }
}

const janaktoy: trialUser = {
  siteId: 4353,
  email: 'janak@jj.jj',
  userId: 435,
  githubToken: 'git2353',
  startTrail: () => {
    return 'trail started'
  },
  // even this also possible; getCoupon: (newName: 'HelloSite..!') =>.....
  getCoupon: (couponName: 'HelloSite..!', value: 43) => {
    return 10
  }
}

janaktoy.email = 'janak@mail.com'
