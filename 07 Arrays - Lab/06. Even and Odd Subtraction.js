function evenAndOddSubtraction(arr) {
  sumOdd = 0;
  sumEvan = 0;
  arr.forEach((el) => {
    if (el % 2 == 0) sumEvan += el;
    else sumOdd += el;
  });
  console.log(sumEvan - sumOdd);
}
evenAndOddSubtraction([3, 5, 7, 9]);
