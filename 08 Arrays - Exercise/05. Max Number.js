function maxNumber(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let isMax = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        isMax = false;
        break;
      }
    }
    if (isMax) result.push(arr[i]);
  }
  console.log(result.join(" "));
}
maxNumber([27, 19, 42, 2, 13, 45, 48]);
