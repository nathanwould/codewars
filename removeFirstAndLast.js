function removeChar(str){
  let arr = str.split('')
  return arr.slice(1, arr.length-1)
};
 
console.log(removeChar('hullabaloo'))