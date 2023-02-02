function biggestOf3Numbers(n1, n2, n3) {
  let bigestum = n1;
  if (n2 > bigestum) bigestum = n2;
  if (n3 > bigestum) bigestum = n3;
  console.log(bigestum);
}
biggestOf3Numbers(-2, 7, 3);
