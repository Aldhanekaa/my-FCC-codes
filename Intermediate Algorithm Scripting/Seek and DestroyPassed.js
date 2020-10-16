function destroyer(arr, ...num) {
  return arr.filter(e => !num.includes(e));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
