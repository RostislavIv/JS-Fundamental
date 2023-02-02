function nonDecreasingSubset(arr) {
  let cur = arr[0];
  arr = arr.filter((el) => {
    if (el >= cur) {
      cur = el;
      return true;
    } else return false;
  });
  console.log(arr.join(" "));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
