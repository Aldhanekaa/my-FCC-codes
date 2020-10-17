// you shouldn't see this code
let arr = [];

function sumFibs(num) {
  generateFibonacciNumber(num,1);
  arr = arr
    .filter(e => e < num)
    .filter(e => e%2!==0);
    // .reduce((prev, current) => prev+current)
  // console.log(arr.length)
  if (arr.length == 0) {
    return 1;
  }else {
    arr = arr.reduce((prev, current) => prev+current)
  }
  return arr;
}
function generateFibonacciNumber(max, min) {
  let one = 1;
  if (arr[arr.length-1] > max) {
    return;
  }else {
    if (arr.length == 0) {
      arr.push(one, min, one+min)
      generateFibonacciNumber(max, min+1)
    } else {
      let start = arr[arr.length-2];
      let end = arr[arr.length-1]
      arr.push(start+end)
      generateFibonacciNumber(max, min+1)
    }
  }
}
// console.log(arr)
console.log(sumFibs(1));
