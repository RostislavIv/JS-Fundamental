function spiceMustFlow(yield) {
  let days = 0;
  let spices = 0;
  while (yield >= 100) {
    days++;
    spices += yield - 26;
    yield -= 10;
  }
  if (spices >= 26) spices -= 26;
  console.log(days);
  console.log(spices);
}
spiceMustFlow(111);
