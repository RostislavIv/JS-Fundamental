function addAndSubtract(arr) {
  let sumOriginal = arr.reduce((acc, el) => acc + el, 0);
  arr = arr.map((el, i) => {
    if (el % 2 == 0) el = el + i;
    else el = el - i;
    return el;
  });
  let sumModified = arr.reduce((acc, el) => acc + el, 0);
  console.log(arr);
  console.log(sumOriginal);
  console.log(sumModified);
}
addAndSubtract([5, 15, 23, 56, 35]);
