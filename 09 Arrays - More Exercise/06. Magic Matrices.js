function magicMatrices(arr) {
  let isMagic = true;
  let sum = arr[0].reduce((acc, el) => acc + el, 0);
  for (let i = 0; i < arr.length; i++) {
    let curSum = arr[i].reduce((acc, el) => acc + el, 0);
    if (curSum != sum) {
      isMagic = false;
      break;
    }
    curSum = 0;
    for (let j = 0; j < arr.length; j++) {
      curSum += arr[j][i];
    }
    if (curSum != sum) {
      isMagic = false;
      break;
    }
  }
  console.log(isMagic);
}
magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
