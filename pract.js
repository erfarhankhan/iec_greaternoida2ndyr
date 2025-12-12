function getRandomInt(a, b) {
    let min =a;
    let max=b;
//   min = Math.ceil(min);
//   max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 6)); // could be 1, 2, 3, 4, 5 or 6