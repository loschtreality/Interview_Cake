// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

// For example, given:

  // [1, 7, 3, 4]

// your function would return:

  // [84, 12, 28, 21]

// by calculating:

  // [7*3*4, 1*3*4, 1*7*4, 1*7*3]

// Do not use division in your solution.

const all_ints = (array) => {
  let newArr = [array[0]]
  let runningTotal = array[0]

  for (var i = 1; i < array.length; i++) {
    newArr.push(runningTotal)
    runningTotal *= array[i]
  }

  runningTotal = array[array.length - 1]

  for (var i = array.length - 2; i >= 0; i--) {
    newArr[i] *= runningTotal
    runningTotal *= array[i]
  }


  return newArr
}


console.log(all_ints([1,7,3,4]))
