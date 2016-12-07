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
    '(': ')',
    '[': ']',
    '{': '}'
  }

  let open_stack = []
  let close_stack = []
  let brackets_match = true

  for (var i = 0; i < chars.length; i++) {
    switch (chars[i]) {
      case '(':
        open_stack.push(chars[i]);
        break;
      case '{':
        open_stack.push(chars[i]);
        break;
      case '[':
        open_stack.push(chars[i]);
        break;
      default:
        close_stack.push(chars[i]);
    }
  }

  console.log(open_stack, "open stack")
  console.log(close_stack, "close stack")

open_stack.forEach((left_brace, idx) => {
  if (key_map[left_brace] !== close_stack[(close_stack.length) - idx]) {
    brackets_match = false
  }
  console.log(key_map[left_brace], 'mapped left')
  console.log(close_stack[(close_stack.length - 1) - idx], 'right brace')
})


  return brackets_match;
}


console.log(bracket_matcher("{ [ ] ( ) }")) // True
// console.log(bracket_matcher("{ [ ( ] ) }")) // False
// console.log(bracket_matcher("{ [ }")) // False
