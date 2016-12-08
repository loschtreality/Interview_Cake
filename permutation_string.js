// Write an efficient function that checks whether any permutation of an input string is a palindrome.
// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false


const permutation_string = (string) => {
  let letter_bank = {}
  let seen_unique = false
  for (var i = 0; i < string.length; i++) {
    if (!letter_bank[string[i]]) {
      letter_bank[string[i]] = 1
    } else {
      letter_bank[string[i]]++
    }
  }


return Object.keys(letter_bank).every((element) => {
    if (letter_bank[element] === 1 && !seen_unique) {
      seen_unique = true
      return true
    } else if (letter_bank[element] === 1 && seen_unique) {
      return false
    } else {
      return letter_bank[element] % 2 === 0
    }
  })

}

console.log(permutation_string("civic")) //true
console.log(permutation_string("ivicc")) //true
console.log(permutation_string("civil")) //false
console.log(permutation_string("livci")) //false
