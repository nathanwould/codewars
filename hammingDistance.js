function hammingDistance (a, b) {
  let distance = 0;
  for (let char in a) {
    if (a[char] !== b[char]) {
      console.log(a[char] !== b[char])
      ++distance
    }
    // console.log(parseInt(a[char]) === parseInt(b[char]))
  }
	return distance;
}

console.log(hammingDistance('100101', '101001'))