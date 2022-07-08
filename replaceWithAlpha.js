function alphabetPosition(text) {
  let arr = text.match(/[a-z][A-Z]/g)
  // let arr = text.match(/[a-z][A-Z]/g)
  return arr;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))