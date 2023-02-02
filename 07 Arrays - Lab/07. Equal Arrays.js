function equalArrays(arr1, arr2) {
  arr1 = arr1.map(Number);
  arr2 = arr2.map(Number);
  let isEqual = true;
  if (JSON.stringify(arr1) != JSON.stringify(arr2)) {
    isEqual = false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        console.log(`Arrays are not identical. Found difference at ${i} index`);
        break;
      }
    }
  }
  if (isEqual) {
    let sum = arr1.reduce((acc, el) => acc + el, 0);
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "3", "4", "5"]);
