function amazingNumbers(num) {
  let sumDigit = 0;
  let n = num;
  while (n > 0) {
    sumDigit += n % 10;
    n = Math.floor(n / 10);
  }
  let isAmazing = false;
  while (sumDigit > 0) {
    if (sumDigit % 10 == 9) {
      isAmazing = true;
      break;
    }
  }
  isAmazing
    ? console.log(`${num} Amazing? True`)
    : console.log(`${num} Amazing? false`);
}
amazingNumbers(1233);
