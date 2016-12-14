// Given an arrayOfInts, find the highestProduct you can get from three of the integers.
// The input arrayOfInts will always have at least three integers.


const highestProduct = (array) => {
  array = array.sort((a,b) => a > b)

  let lowAndHigh =
    array[0] * array[1] * array[array.length - 1];

  let lastThree =
    array[array.length - 1] * array[array.length - 2] * array[array.length - 3];

  return Math.max(lowAndHigh, lastThree)
}



console.log(highestProduct([-10000,-80, 100, 1000, 300]))
console.log(highestProduct([1, 3, 5, 7, 9]))
console.log(highestProduct([-10, -10, 1, 3, 2]))
