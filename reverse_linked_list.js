// Hooray! It's opposite day. Linked lists go the opposite way today.
// Write a function for reversing a linked list. Do it in-place.

// Your function will have one input: the head of the list.

// Your function should return the new head of the list.


class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

const reverseList = (head) => {
  // If head has no links
  if (head.next === null) {
    return head
  }

  let nextLink = head.next
  let prevLink = null;

  while (head) {
  head.next = prevLink
  prevLink = head
  head = nextLink
  nextLink = (head === null) ? null : head.next
  }

  return prevLink;
}


let a = new Node(10)
let b = new Node(20)
a.next = b
let c = new Node(30)
b.next = c


console.log(a)
reverseList(a)
console.log(c)
