function list(names) {
  // console.log(names)
  const nameArray = names.map(obj => (
    obj.name
  ))
  if (nameArray.length=1) {
    return nameArray
  }
  else if (nameArray.length = 2) {
    nameArray.splice(nameArray.length-1, 0, '&')
    return nameArray.join(' ')
  } else {
    const arr1 = nameArray.slice(0, nameArray.length - 1).join(', ')
    const arr2 = nameArray.slice(nameArray.length-1)
    return arr1.concat(' & ', arr2)
  } 
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))