function dayOfWeek(day) {
  let daysWeek = [
    "Invalid day!",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (1 > day || day > 7) day = 0;
  console.log(daysWeek[day]);
}
dayOfWeek(1);
