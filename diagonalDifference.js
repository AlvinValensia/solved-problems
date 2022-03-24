function diagonalDifference(arr) {
  let length = arr.length - 1;
  let min = 0;

  for (let i = 0; i < arr.length; i++) {
    min += arr[i][i] - arr[i][length - i];
  }

  return Math.abs(min);
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);

// 11 + 5 + -12 = 4
// 4 + 5 + 10 = 19
// 4 - 19 = -15 => Math.abs(4 - (-19)) = 15;
