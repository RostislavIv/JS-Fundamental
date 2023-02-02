function gadiatorExpenses(lostFigths, helmet, sword, shield, armor) {
  let expenses = Math.floor(lostFigths / 2) * helmet;
  expenses += Math.floor(lostFigths / 3) * sword;
  expenses += Math.floor(lostFigths / 6) * shield;
  expenses += Math.floor(lostFigths / 12) * armor;
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gadiatorExpenses(23, 12.5, 21.5, 40, 200);
