function bitcoinMining(input) {
  let bitcoins = 0;
  let money = 0;
  let firstDay = 0;
  let priceGold = 67.51;
  let priceBitcoin = 11949.16;
  let day = 0;
  while (input.length != 0) {
    let gold = input.shift();
    day++;
    if (day % 3 == 0) gold *= 0.7;
    money += gold * priceGold;
    if (money >= priceBitcoin) {
      bitcoins += Math.floor(money / priceBitcoin);
      money = money % priceBitcoin;
      if (firstDay == 0) firstDay = day;
    }
  }
  console.log(`Bought bitcoins: ${bitcoins}`);
  if (firstDay != 0)
    console.log(`Day of the first purchased bitcoin: ${firstDay}`);
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoinMining([3124.15, 504.212, 2511.124]);
