function maxSequenceOfEqualElements(arr) {
  let longest = 1;
  let value = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let counter = 1;
    let curValue = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        counter++;
        if (counter > longest) {
          longest = counter;
          value = curValue;
        }
      } else break;
    }
  }
  let result = new Array(longest).fill(value);
  console.log(result.join(" "));
}
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
