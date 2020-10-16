function translatePigLatin(str) {
  // if (str[0])
  // console.log(str[0])
  let vowel = /^[A|I|U|E|O]/gi
  // console.log(vowel.test(str))
  if (vowel.test(str)) {
    return str + 'way'
  }else {
    let copyOfStr = str.split('')
    let arr = [];
    copyOfStr.forEach(e => {
      if (vowel.test(e)) {
        arr.push(e)
      }
    })
    arr = arr[0]
    let consonant = copyOfStr.splice(0, copyOfStr.indexOf(arr));
    copyOfStr = copyOfStr.concat(consonant).join('') + 'ay'

    return copyOfStr
  }
}

console.log(translatePigLatin("glove")); // oveglay

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin
