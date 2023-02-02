function orbit(input) {
  let column = Number(input[0]);
  let row = Number(input[1]);
  let x = Number(input[2]);
  let y = Number(input[3]);
  let arr = Array(row);
  for (let i = 0; i < row; i++) {
    arr[i] = Array(column);
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      let curX = Math.abs(x - i) + 1;
      let curY = Math.abs(y - j) + 1;
      curX > curY ? (arr[i][j] = curX) : (arr[i][j] = curY);
    }
  }
  for (let print of arr) {
    console.log(print.join(" "));
  }
}
orbit([4, 4, 0, 0]);
