// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
  let beers = bonus / price;
  let level = 0;
  while (beers >= (level + 1)**2) {
    level += 1;
    beers -= level*level;
  }
  return level;
};