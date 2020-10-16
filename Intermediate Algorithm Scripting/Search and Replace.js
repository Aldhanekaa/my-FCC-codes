function myReplace(str, before, after) {
  str = str.split(" ");
  let uppercase = /^[A-Z]/g;
  // console.log(uppercase.test(before))
  uppercase = uppercase.test(before);
  let indexOfBefore = str.indexOf(before);
  if (uppercase) {
    str.splice(indexOfBefore, 1, toUpperCase(after))
  }else {
    str.splice(indexOfBefore, 1, after.toLowerCase())
  }
  return str.join(' ');
}

console.log(myReplace("I think we should look up there", "up", "Down"));

function toUpperCase(str) {
  str = str.split(' ')
  str = str.map(e => e[0].toUpperCase() + e.substr(1))
  return str.join("")
}
