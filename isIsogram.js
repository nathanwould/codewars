function isIsogram(str){
  let arr = str.toLowerCase().split('').sort()
  console.log(arr)
  let i = 0
  while (i < arr.length) {
    console.log((arr[i], arr[i+1]))
    if (arr[i] == arr[i+1]) {
      return false
    } else {
    i++
    }
  }
  return true
}

console.log(isIsogram("moOse"))