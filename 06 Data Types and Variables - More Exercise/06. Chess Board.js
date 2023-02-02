function chessBoard(n) {
  console.log('<div class="chessboard">');
  for (i = 0; i < n; i++) {
    console.log("  <div>");
    for (j = 0; j < n; j++) {
      if (i % 2 == j % 2) console.log('    <span class="black"></span>');
      else console.log('    <span class="white"></span>');
    }
    console.log("  </div>");
  }
  console.log("</div>");
}
chessBoard(3);
