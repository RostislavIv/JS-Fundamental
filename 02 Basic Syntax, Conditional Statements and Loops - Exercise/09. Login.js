function login(input) {
  let userName = input.shift();
  let password = "";
  for (let i = userName.length - 1; i >= 0; i--) {
    password += userName[i];
  }
  let numLogin = 0;
  while (input.length != 0) {
    let cur = input.shift();
    numLogin++;
    if (cur == password) {
      console.log(`User ${userName} logged in.`);
      break;
    } else if (numLogin <= 3) {
      console.log("Incorrect password. Try again.");
    } else {
      console.log(`User ${userName} blocked!`);
      break;
    }
  }
}
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
