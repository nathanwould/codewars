function pyramidHeight(n) {
  let cubes = n;
  let levels = 1;
  while (cubes > (levels + 1)**2) {
    levels += 1;
    cubes -= levels*levels;
  }
  return levels;
}