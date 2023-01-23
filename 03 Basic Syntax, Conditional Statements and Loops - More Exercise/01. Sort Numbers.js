function sortNumbers(n1, n2, n3) {
  if (n3 > n2) {
    let temp = n2;
    n2 = n3;
    n3 = temp;
  }
  if (n2 > n1) {
    let temp = n1;
    n1 = n2;
    n2 = temp;
  }
  if (n3 > n2) {
    let temp = n2;
    n2 = n3;
    n3 = temp;
  }
  console.log(n1);
  console.log(n2);
  console.log(n3);
}
sortNumbers(2, 1, 3);
