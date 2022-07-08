function validParentheses(parens) {
  const stack = [];
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      stack.push(parens[i])
    } else if (parens[i] === ")") {
      if (stack.includes("(")) {
        stack.pop(); 
      } else {
        return false
      }
    } else return false
  }
  return stack.length === 0 ? true : false;
}