function birthdayCakeCandles(candles) {
  let max = Math.max(...candles);
  console.log(max);
  let highest = candles.filter((candle) => {
    return candle === max;
  });
  console.log(highest);
  return highest.length;
}

console.log(birthdayCakeCandles([4, 4, 2, 3]));
