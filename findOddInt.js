function findOdd(A) {
  return A.reduce(function (accumulator, currentValue) {
    if (accumulator.indexOf(currentValue) !== -1) {
      accumulator.push(currentValue)
    }
    return accumulator
  }, []);
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))