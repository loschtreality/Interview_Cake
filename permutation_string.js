// Write an efficient function that checks whether any permutation of an input string is a palindrome.
// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false


const permutation_string = (string) => {
  let letter_bank = new Set()

  for (var i = 0; i < string.length; i++) {
    let char = string[i]
    if (letter_bank.has(char)) {
      letter_bank.delete(char)
    } else {
      letter_bank.add(char)
    }
  }


  return letter_bank.size <= 1
}

console.log(permutation_string("civic")) //true
console.log(permutation_string("ivicc")) //true
console.log(permutation_string("civil")) //false
console.log(permutation_string("livci")) //false
