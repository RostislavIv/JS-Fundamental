function addAndRemove(input) {
  const Add = "add";
  const Remove = "remove";
  let num = 1;
  result = [];
  while (input.length != 0) {
    let command = input.shift();
    if (command == Add) result.push(num);
    else if (command == Remove) result.pop();
    num++;
  }
  if (result.length > 0) console.log(result.join(" "));
  else console.log("Empty");
}
addAndRemove(["remove", "remove", "remove"]);
