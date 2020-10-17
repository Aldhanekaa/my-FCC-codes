// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  return str
  .replace(/([A-Z])/g, ' $1')
  .toLowerCase()
  .trim()
  .split(/[\W_]/)
  .filter(e => e!== '').join('-')
  ;
}

console.log(spinalCase('AllThe-small Things'));

// Hello Wrold -> hello-world
// convert to the lower case
// we can split it then we can use join method





