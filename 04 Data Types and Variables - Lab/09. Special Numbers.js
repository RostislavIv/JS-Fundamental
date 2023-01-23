function specialNumbers(num) {
  for (let i = 1; i <= num; i++) {
    let cur = i.toString();
    let sumDigit = 0;
    for (let j = 0; j <= cur.length - 1; j++) {
      sumDigit += Number(cur[j]);
    }
    sumDigit == 5 || sumDigit == 7 || sumDigit == 11
      ? console.log(`${i} -> True`)
      : console.log(`${i} -> False`);
  }
}
specialNumbers(15);
