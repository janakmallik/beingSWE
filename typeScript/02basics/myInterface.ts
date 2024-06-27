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

interface trialUser{
  githubToken: string
}

// inheritance
interface adminAccount extends trialUser{
  role: 'admin'|'ta'|'learner'
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
