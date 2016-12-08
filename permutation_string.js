// Write an efficient function that checks whether any permutation of an input string is a palindrome.
// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false


const permutation_string = (string) => {
  let letter_bank = {}
  let is_permStr = true
  for (var i = 0; i < string.length; i++) {
    if (!letter_bank[string[i]]) {
      letter_bank[string[i]] = 1
    } else {
      letter_bank[string[i]]++
    }
  }

  console.log(letter_bank)
  for (var count in letter_bank) {
    if (count % 2 !== 0 && count > 1) {
      is_permStr = false
    }
  }
  return is_permStr
}

// console.log(permutation_string("civic")) //true
// console.log(permutation_string("ivicc")) //true
// console.log(permutation_string("civil")) //false
// console.log(permutation_string("livci")) //false
