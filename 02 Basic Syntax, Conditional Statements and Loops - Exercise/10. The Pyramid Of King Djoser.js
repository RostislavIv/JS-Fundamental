function thePyramidOfKingDjoser(base, increment) {
  let stone = 0;
  let marble = 0;
  let lazur = 0;
  let gold = 0;
  let hight = Math.ceil(base / increment);
  for (let i = 1; i <= hight; i++) {
    if (i == hight) {
      gold = base * base;
    } else if (i % 5 == 0) {
      lazur += 4 * (base - 1);
      stone += Math.pow(base - 2, 2);
    } else {
      marble += 4 * (base - 1);
      stone += Math.pow(base - 2, 2);
    }
    base -= 2;
  }
  console.log(`Stone required: ${stone}`);
  console.log(`Marble required: ${marble}`);
  console.log(`Lapis Lazuli required: ${lazur}`);
  console.log(`Gold required: ${gold}`);
  console.log(`Final pyramid height: ${hight}`);
}
thePyramidOfKingDjoser(11, 2);
