function spiralMatrix(row, column) {
  let arr = new Array(row).fill([]);
  arr = arr.map((el) => (el = new Array(column).fill(0)));
  let num = 0;
  let startRow = 0;
  let endRow = row - 1;
  let startColumn = 0;
  let endColumn = column - 1;
  while (num < row * column) {
    for (let i = startColumn; i <= endColumn; i++) {
      num++;
      arr[startRow][i] = num;
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      num++;
      arr[i][endColumn] = num;
    }
    endColumn--;
    for (let i = endColumn; i >= startColumn; i--) {
      num++;
      arr[endRow][i] = num;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      num++;
      arr[i][startColumn] = num;
    }
    startColumn++;
  }
  arr.forEach((row) => console.log(row.join(" ")));
}
spiralMatrix(5, 5);
