function truthCheck(collection, pre) {
  return collection.every(e => e.hasOwnProperty(pre) && !!e[pre])
}

console.log(truthCheck([{"single": ""}, {"single": "double"}], "single"));
