const pairs = {
  "A" : "T",
  "T": "A",
  "C":"G",
  "G" : "C",
}

function pairElement(str) {
  return str.split('').map(e => ([...e, pairs[e]]));
}

console.log(pairElement("GCG"));
