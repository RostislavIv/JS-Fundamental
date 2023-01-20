function vacation(numOfPeople, typeOfGroup, dayOfWeek) {
  let price = 0;
  if (typeOfGroup == "Students") {
    let discount = 1;
    if (numOfPeople >= 30) discount = 0.85;
    if (dayOfWeek == "Friday") {
      price = 8.45 * numOfPeople * discount;
      console.log(`Total price: ${price.toFixed(2)}`);
    } else if (dayOfWeek == "Saturday") {
      price = 9.8 * numOfPeople * discount;
      console.log(`Total price: ${price.toFixed(2)}`);
    } else if ((dayOfWeek = "Sunday")) {
      price = 10.46 * numOfPeople * discount;
      console.log(`Total price: ${price.toFixed(2)}`);
    }
  } else if (typeOfGroup == "Business") {
    if (numOfPeople >= 100) numOfPeople -= 10;
    if (dayOfWeek == "Friday") {
      price = 10.9 * numOfPeople;
      console.log(`Total price: ${price.toFixed(2)}`);
    } else if (dayOfWeek == "Saturday") {
      price = 15.6 * numOfPeople;
      console.log(`Total price: ${price.toFixed(2)}`);
    } else if ((dayOfWeek = "Sunday")) {
      price = 16 * numOfPeople;
      console.log(`Total price: ${price.toFixed(2)}`);
    }
  } else if (typeOfGroup == "Regular") {
    let discount = 1;
    if (10 <= numOfPeople && numOfPeople <= 20) discount = 0.95;
    if (dayOfWeek == "Friday") {
      price = 15 * numOfPeople * discount;
      console.log(`Total price: ${price.toFixed(2)}`);
    } else if (dayOfWeek == "Saturday") {
      price = 20 * numOfPeople * discount;
      console.log(`Total price: ${price.toFixed(2)}`);
    } else if ((dayOfWeek = "Sunday")) {
      price = 22.5 * numOfPeople * discount;
      console.log(`Total price: ${price.toFixed(2)}`);
    }
  }
}
vacation(30, "Students", "Sunday");
