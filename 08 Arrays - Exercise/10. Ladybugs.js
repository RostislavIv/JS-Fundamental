function ladybugs(input) {
  const Left = "left";
  const Rigth = "right";
  let field = new Array(input.shift()).fill(0);
  let indexes = input.shift().split(/\s+/).map(Number);
  indexes.forEach((index) => {
    if (0 <= index && index < field.length) field[index] = 1;
  });
  while (input.length != 0) {
    let command = input.shift().split(/\s+/);
    let position = Number(command[0]);
    let directions = command[1];
    let lengthFly = Number(command[2]);
    if (
      0 <= position &&
      position < field.length &&
      field[position] == 1 &&
      (directions == Left || directions == Rigth)
    ) {
      field[position] = 0;
      if (directions == Left) lengthFly *= -1;
      while (true) {
        position += lengthFly;
        if (0 > position || position >= field.length) break;
        if (field[position] == 0) {
          field[position] = 1;
          break;
        }
      }
    }
  }
  console.log(field.join(" "));
}
ladybugs([5, "3", "3 left 2", "1 left -2"]);
