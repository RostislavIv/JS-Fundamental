function dungeonestDark(input) {
  const Poition = "potion";
  const Chest = "chest";
  let health = 100;
  let coins = 0;
  let rooms = input[0].split("|");
  for (let i = 0; i < rooms.length; i++) {
    let item = rooms[i].split(" ")[0];
    let number = Number(rooms[i].split(" ")[1]);
    if (item == Poition) {
      if (health + number >= 100) number = 100 - health;
      health += number;
      console.log(`You healed for ${number} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (item == Chest) {
      coins += number;
      console.log(`You found ${number} coins.`);
    } else {
      health -= number;
      if (health > 0) console.log(`You slayed ${item}.`);
      else {
        console.log(`You died! Killed by ${item}.`);
        console.log(`Best room: ${i + 1}`);
        break;
      }
    }
  }
  if (health > 0) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
