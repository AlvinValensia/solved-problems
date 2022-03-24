function points(games) {
  let total = 0;
  games.map((game) => {
    if (game[0] > game[2]) {
      total += 3;
    } else if (game[0] === game[2]) {
      total += 1;
    }
  });
  return total;
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
