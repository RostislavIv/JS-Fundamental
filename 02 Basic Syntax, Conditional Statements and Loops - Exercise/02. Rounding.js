function rounding(num, precition) {
  let power = Math.pow(10, precition);
  num = Math.round(num * power) / power;
  console.log(num);
}
rounding(3.1415926535897932384626433832795, 2);
