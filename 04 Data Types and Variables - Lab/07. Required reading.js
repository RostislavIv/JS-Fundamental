function requiredReading(pages, pagesPerHour, numOfDays) {
  let totalHours = pages / pagesPerHour;
  let hoursPerDay = totalHours / numOfDays;
  console.log(hoursPerDay);
}
requiredReading(212, 20, 2);
