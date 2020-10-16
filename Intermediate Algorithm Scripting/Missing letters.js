function fearNotLetter(str) {
  let copyOfStr = str.split('');
  let n = copyOfStr
    // return character to ASCII code
    // for example 'ABC'.charCodeAt(0); returns 65
    .map((e,index) => str.charCodeAt(index)) // [ 97, 98, 99, 101 ]
    .filter((element,index, upon) => {
      if (upon[index+1] !== element+1) {
        return element;
      }
    });
  n = n.length == 1 ? undefined : String.fromCharCode(n[0]+1)
  return n;
}

console.log(fearNotLetter("bcdf")); // prints e
