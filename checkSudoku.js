function doneOrNot(board){
  let result = board.sort().toString() === "1,2,3,4,5,6,7,8,9" ?
    'Try again!'
    : 'Finished!'
  return result
}

console.log(doneOrNot([6, 7, 2, 1, 9, 0, 3, 4, 9]))