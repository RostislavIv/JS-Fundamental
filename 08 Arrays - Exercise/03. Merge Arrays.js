function mergeArrays(arr1, arr2) {
  let result = [];
  arr1.forEach((el, i) => {
    if (i % 2 == 0) result.push(Number(el) + Number(arr2[i]));
    else result.push(el + arr2[i]);
  });
  console.log(result.join(" - "));
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
