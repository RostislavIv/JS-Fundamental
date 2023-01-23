function nextDay(year, month, day) {
  if (year < 1900) {
    year += 1900;
  }
  switch (month) {
    case 2:
      if (day >= 28) {
        isLeapYear = false;
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
          isLeapYear = true;
        }
        if (isLeapYear && day == 28) {
          day++;
        } else {
          month++;
          day = 1;
        }
      } else {
        day++;
      }
      break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
      if (day == 31) {
        month++;
        day = 1;
      } else {
        day++;
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (day == 30) {
        month++;
        day = 1;
      } else {
        day++;
      }
      break;
    case 12:
      if (day == 31) {
        year++;
        month = 1;
        day = 1;
      } else {
        day++;
      }
      break;
  }
  console.log(`${year}-${month}-${day}`);
}
nextDay(2016, 9, 30);
