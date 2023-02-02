function equalSums(arr) {
  let isFound = false;
  for (let i = 0; i < arr.length; i++) {
    let sumLeft = 0;
    for (let j = 0; j < i; j++) {
      sumLeft += arr[j];
    }
    let sumRight = 0;
    for (let j = i + 1; j < arr.length; j++) {
      sumRight += arr[j];
    }
    if (sumLeft == sumRight) {
      console.log(i);
      isFound = true;
      break;
    }
  }
  if (!isFound) console.log("no");
}
equalSums([1, 2, 3, 3]);
