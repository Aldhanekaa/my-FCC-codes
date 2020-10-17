function steamrollArray(arr, flatArr = []) {
  // console.log(arr)
  arr.forEach(element => {
    if (!Array.isArray(element)) {
      console.log(element)
      flatArr.push(element)
    }else if (Array.isArray(element)) {
      // console.log(element)
      steamrollArray(element, flatArr)
    }
  })
  return flatArr;
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));
