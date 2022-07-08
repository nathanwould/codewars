var moveZeros = function (arr) {
  let arrA = []
  let arrB = []
  arr.forEach(element => {
    if (element === 0) {
      arrB.push(element)
    } else {
      arrA.push(element)
    }
  });
  return arrA.concat(arrB)
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))