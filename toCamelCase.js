function toCamelCase(str){
  let arr = str.split('');
  let camelCase = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == '-' || arr[i] == '_') {
      arr.splice(i, 1)
      let caps = arr[i].toUpperCase()
      camelCase.push(caps)
    } else {
      camelCase.push(arr[i])
    }
  }
  return camelCase.join('')
  }

console.log(toCamelCase('the-stealth-warrior'))
  
// Slicker solutions someone else came up with:

// function toCamelCase(str){
//   var regExp=/[-_]\w/ig;
//   return str.replace(regExp,function(match){
//         return match.charAt(1).toUpperCase();
//    });
// }

// function toCamelCase(str){
//   return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
// }