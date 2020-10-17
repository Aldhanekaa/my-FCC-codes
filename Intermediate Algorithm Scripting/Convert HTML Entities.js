const repl = {
  "&" : "&amp;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
  "<": "&lt;"
}
function convertHTML(str) {
  return str.split('')
    .map(element => repl[element] == undefined ? element : repl[element]).join('') ;
}

console.log(convertHTML("Dolce & Gabbana"));
