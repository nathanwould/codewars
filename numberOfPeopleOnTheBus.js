// var number = function (busStops) {
//   let flattened = [];
//     busStops.forEach(item => {
//     return item.reduce((prev, curr) =>
//       flattened.push(prev - curr)
//     )
//   })
//   return flattened.reduce((prev, curr) => prev + curr)
// }

// OR

const number = busStops => busStops.reduce((people, stop) => people + stop[0] - stop[1], 0)

console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))