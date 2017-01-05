// Imagine you landed a new job as a cashier...
// Your quirky boss found out that you're a programmer and has a weird request about something they've been wondering for a long time.

// Write a function that, given:

// an amount of money
// an array of coin denominations
// computes the number of ways to make amount of money with coins of the available denominations.

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢


const make_change = (amount, denominations) => {
  let sum = 0
    denominations.forEach((denom) => {
      x.forEach((numTimes) => {
        answer += make_change(amt, otherDenoms)
      })
    })

  return sum
}


console.log(make_change(4, [1,2,3])) // [[1,1,1,1], [1,1,2], [1,3], [2,2]]
