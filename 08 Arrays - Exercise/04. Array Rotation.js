function arrayRotation(arr, n) {
  for (i = 0; i < n; i++) {
    arr.push(arr.shift());
  }
  console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
