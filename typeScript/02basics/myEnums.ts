// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2

// if (seat === AISLE) {

// }

// instead

// add const to avoid adding too much code to js file
const enum seatChoice {
  // AISLE = 10,
  AISLE = 'aisle',
  MIDDLE = 33,
  WINDOW,
  FOURTH
}

const hcSeat = seatChoice.AISLE


