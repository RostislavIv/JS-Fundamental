function reverseAnArrayOfNumbers(n, arr) {
  let result = arr.slice(0, n);
  result = result.reverse();
  console.log(result.join(" "));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
