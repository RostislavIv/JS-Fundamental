function diagonalAttack(arr) {
  arr = arr.map((el) => {
    el = el.split(" ").map(Number);
    return el;
  });
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
    sum2 += arr[arr.length - 1 - i][i];
  }
  if (sum1 == sum2) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i != j && j != arr.length - 1 - i) arr[i][j] = sum1;
      }
    }
  }
  arr.forEach((el) => console.log(el.join(" ")));
}
diagonalAttack([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
