// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

// Ok this was a fun one - I've loved cooking for a long time and was a professional
// cook for a bit, and my wife likes to bake and has been telling me to make an app
// that does basically the goal of this algorithm, so it was nice to be forced
// into sketching out some initial logic that could be used.

function cakes(recipe, available) {
  // my solution grabs just the available and needed ingredients from the arguments
  const has = Object.keys(available);
  const needed = Object.keys(recipe);
  // We then do a basic check to see if all of the needed ingredients are available
  // If not, we return 0
  if (!needed.every(element => has.includes(element))) return 0;
  // Otherwise, we use the recipe's ingredients to map through each ingredient, returning 
  // the number of times the needed quantity divides by the available quantity, storing
  // the result as an array
  else {
    let amounts = needed.map(ingredient => Math.floor(available[ingredient] / recipe[ingredient]))
  // we then sort the array lowest to highest, and take the first, lowest value
    return amounts.sort((a, b) => a - b)[0];
  };
}

// I'm relatively happy with this first pass, but it wasn't super difficult to refactor 
// and eliminate some of the noise like assinging the keys of both arguments to new
// variables, and the else check should also handle when the amount of cakes bake-able
// is zero, so the initial check is probably not necessery.
function cakes(recipe, available) {
  return Math.min(
    ...Object.keys(recipe).map(ingredient => Math.floor(available[ingredient] / recipe[ingredient] || 0))
  );
}