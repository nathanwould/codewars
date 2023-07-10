function solution(number){
  let multiples = [];
  for (let i = number; i > 0; i--) {
    if (i % 3 == 0 || i % 5 == 0) multiples.push(i);
  }
  console.log(multiples)
  return multiples.reduce((acc, number) => acc + number, 0);
}

console.log(solution(10))