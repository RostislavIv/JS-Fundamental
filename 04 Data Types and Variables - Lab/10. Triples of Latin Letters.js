function triplesOfLatinresults(num) {
  num = Number(num);
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      for (let k = 1; k <= num; k++) {
        let result = String.fromCharCode(96 + i);
        result += String.fromCharCode(96 + j);
        result += String.fromCharCode(96 + k);
        console.log(result);
      }
    }
  }
}
triplesOfLatinresults("3");
