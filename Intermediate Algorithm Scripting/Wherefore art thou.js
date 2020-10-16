function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source)
  var arr = [];
  
  // Only change code below this line
  let b = [];
  collection.forEach((item, index) => {
    if (sourceKeys.every(Item => Item in item)) {
      b.push(item)
    }
  })
  console.log(b)
  arr = b.filter(e => {
    for (let key in source) {
      console.log( e[key] == source[key])
      if( e[key] !== source[key]) {
        return
      }
    }
    return e
  })
  console.log(arr)
  // Only change code above this line
  return arr;
} 

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});


// must check

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou
