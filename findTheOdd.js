function findOdd(arr) {
  let frequencyCounter = {};
  for (let item of arr) {

    console.log(frequencyCounter)
      frequencyCounter[item] = (frequencyCounter[item] || 0 ) + 1
  }
  for (let key in frequencyCounter) {
    if (frequencyCounter[key] % 2 !== 0) return parseInt(key);
  }
  return 0;
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))