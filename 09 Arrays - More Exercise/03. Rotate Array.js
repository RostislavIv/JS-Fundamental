function rotateArray(arr) {
  let rotations = Number(arr.pop()) % arr.length;
  for (let i = 0; i < rotations; i++) {
    arr.unshift(arr.pop());
  }
  console.log(arr.join(" "));
}
rotateArray(["1", "2", "3", "4", "2"]);
