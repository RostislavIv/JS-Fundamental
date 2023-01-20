function sumOfOddNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    console.log(i * 2 - 1);
    sum += i * 2 - 1;
  }
  console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);
