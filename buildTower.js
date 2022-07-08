function towerBuilder(nFloors) {
  let tower = [];
  for (i = 0; i < nFloors; i++) {
    let width = i * 2 + 1
    for (j = 0; j < width; j++) {
      let floor = [];
      floor.push('*')
      console.log(floor)
      return floor
    }
    tower.push(floor.join(''))
    
  }
  return tower
}

console.log(towerBuilder(5))