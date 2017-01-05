// Given an arrayOfInts, find the highestProduct you can get from three of the integers.
// The input arrayOfInts will always have at least three integers.

const highestProduct = (array) => {
  if (array.length < 3) {
    throw new Error('Less than 3 itmes in the array')
  }

  // find highest and lowest of first two elements
  let highest = Math.max(array[0], array[1])
  let lowest = Math.min(array[0], array[1])

  // define high / low of product of first two
  let highestOfTwo = array[0] * array[1]
  let lowestOfTwo = array[0] * array[1]

  // define higest of 3 with first 3 numbers
  let highestOfThree = array[0] * array[1] * array[2]

  // start at the third number
  for (var i = 2; i < array.length; i++) {
    let current = array[i]

  // see if there is a new highest of three
    highestOfThree = Math.max(
      highestOfThree,
      current * highestOfTwo,
      current * lowestOfTwo
    )

    // see if there is a new highest of two
    highestOfTwo = Math.max(
      highestOfTwo,
      current * highest,
      current * lowest
    )

    // see if there is a new lowest of two
    lowestOfTwo = Math.min(
      lowestOfTwo,
      current * highest,
      current * lowest
    )

    // see if there is a new highest
    highest = Math.max(highest, current)

    // see if there is a new lowest
    lowest = Math.min(lowest, current)
  }

  return highestOfThree
}

console.log(highestProduct([-10000,-80, 100, 1000, 300]))
console.log(highestProduct([1, 3, 5, 7, 9]))
console.log(highestProduct([-10, -10, 1, 3, 2]))
