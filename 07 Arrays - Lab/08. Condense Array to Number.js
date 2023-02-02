function condenseArrayToNumber(arr) {
  for (let i = arr.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      arr[j] += arr[j + 1];
    }
  }
  console.log(arr[0]);
}
condenseArrayToNumber([5, 0, 4, 1, 2]);
