function printNElement(arr) {
  let step = arr.pop();
  arr = arr.filter((el, i) => i % step == 0);
  console.log(arr.join(" "));
}
printNElement(["5", "20", "31", "4", "20", "2"]);
