function uniteUnique(mainArr, ...secArr) {
  let result = secArr.map(element => {
    return element
      .filter(e => !mainArr.includes(e))
  });
  return mainArr.concat(result.flat());
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // [ 1, 3, 2, 5, 4 ]

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
