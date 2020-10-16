function sumAll(arr) {
  // console.log()
  let bigNum = Math.max(...arr)
  let smallNum = Math.min(...arr)

  if (smallNum >= bigNum) {
    return bigNum;
  }else {
    return smallNum + sumAll([smallNum+1, bigNum])
  }
}

console.log(sumAll([1, 4]));
