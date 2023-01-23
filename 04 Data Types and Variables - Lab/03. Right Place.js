function rightPlace(str, chr, result) {
  str = str.replace("_", chr);
  let output = str == result ? "Matched" : "Not Matched";
  console.log(output);
  //if (str == result) console.log("Matched");
  //else console.log("Not Matched");
}
rightPlace("result_ng", "I", "resultong");
