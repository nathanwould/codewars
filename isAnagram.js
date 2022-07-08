function anagrams(word, words) {
  let wordArray = word.split('').sort().join()
  let anagramArray = [];
  words.forEach((item) => {
    let itemArray = item.split('').sort().join()
    if (itemArray == wordArray) {
      anagramArray.push(item)
    } else {
      return false
    }
  })
  return anagramArray
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))