function arrayDiff(a, b) {
  return a.filter(i => !b.includes(i))
}

console.log(arrayDiff([1,2,3], [1,2]))