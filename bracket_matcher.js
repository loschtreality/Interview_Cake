// You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces, brackets, and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses validator.
// Let's say:
//
// '(', '{', '[' are called "openers."
// ')', '}', ']' are called "closers."
// Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.
//
// Examples:
//
// "{ [ ] ( ) }" should return True
// "{ [ ( ] ) }" should return False
// "{ [ }" should return False



const bracket_matcher = (chars) => {
  chars = chars.split(' ')
  const key_map = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  let stack = []

  for (var i = 0; i < chars.length; i++) {
    let brace_type = chars[i]

    switch (brace_type) {
      case '{':
        stack.push(brace_type)
        break;
      case '(':
        stack.push(brace_type)
        break;
      case '[':
        stack.push(brace_type)
        break;
      default:
        if (key_map[brace_type] === stack[stack.length - 1]) {
          stack.pop()
        }
    }
  }

  return stack.length === 0;
}


console.log(bracket_matcher("{ [ ] ( ) }")) // True
console.log(bracket_matcher("{ [ ( ] ) }")) // False
console.log(bracket_matcher("{ [ }")) // False
