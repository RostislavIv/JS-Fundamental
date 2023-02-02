function tseamAccount(input) {
  let account = input.shift().split(" ");
  let token = "";
  while ((token = input.shift()) != "Play!") {
    let [command, game] = token.split(" ");
    let expansion = "";
    if (command == "Expansion") [game, expansion] = game.split("-");
    let index = -1;
    index = account.indexOf(game);
    let isGame = index != -1;
    switch (command) {
      case "Install":
        if (!isGame) account.push(game);
        break;
      case "Uninstall":
        if (isGame) account.splice(index, 1);
        break;
      case "Update":
        if (isGame) {
          account.splice(index, 1);
          account.push(game);
        }
        break;
      case "Expansion":
        if (isGame) account.splice(index + 1, 0, `${game}:${expansion}`);
        break;
    }
  }
  console.log(account.join(" "));
}
tseamAccount([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);
