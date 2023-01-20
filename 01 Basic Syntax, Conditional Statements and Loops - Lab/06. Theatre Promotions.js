function theatrPromotions(typeOfDay, age) {
  if (0 <= age && age <= 18) {
    if (typeOfDay == "Weekday") console.log("12$");
    else if (typeOfDay == "Weekend") console.log("15$");
    else if (typeOfDay == "Holiday") console.log("5$");
  } else if (18 < age && age <= 64) {
    if (typeOfDay == "Weekday") console.log("18$");
    else if (typeOfDay == "Weekend") console.log("20$");
    else if (typeOfDay == "Holiday") console.log("12$");
  } else if (64 < age && age <= 122) {
    if (typeOfDay == "Weekday") console.log("12$");
    else if (typeOfDay == "Weekend") console.log("15$");
    else if (typeOfDay == "Holiday") console.log("10$");
  } else console.log("Error!");
}
theatrPromotions("Weekday", 42);
