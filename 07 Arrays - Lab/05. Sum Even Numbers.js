function sumEvenNumbers(arr) {
  arr = arr.map(Number).filter((el) => el % 2 == 0);
  let sum = arr.reduce((acc, el) => acc + Number(el), 0);
  console.log(sum);
}
sumEvenNumbers(["3", "5", "7", "9"]);
