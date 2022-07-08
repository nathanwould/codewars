function componentToHex(c) {
  c > 255 ? c = 255 : c = c
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgb(r, g, b) {
  return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(rgb(40, 37, 268))