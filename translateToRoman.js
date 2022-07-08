function solution(num){
  let key = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  let numerals = "";

  Object.keys(key).forEach((item) => {
    while (num >= key[item]) {
      numerals += item;
      num -= key[item];
    }
  });
  return numerals;
}