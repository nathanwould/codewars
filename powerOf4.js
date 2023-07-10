function powerOf4(n) {
  if (typeof n != "number") return false
  for (let i = 0; i < 100; i++) {
    if (4**i === n) return true
  }
  return false
}

console.log(powerOf4(1024))
console.log(powerOf4(44))
console.log(powerOf4("not a positive integer"))
console.log(powerOf4(4))
console.log(powerOf4(16))
console.log(powerOf4(1))
console.log(powerOf4(20))
console.log(powerOf4(3.1415))
console.log(powerOf4("1"))