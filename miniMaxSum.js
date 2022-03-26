function miniMaxSum(arr) {
  let max = 0;
  let min = 0;
  arr.sort();

  for (let i = 1; i < arr.length; i++) {
    max += arr[i];
  }

  for (let i = 0; i < arr.length - 1; i++) {
    min += arr[i];
  }
  console.log(min, max);
}

miniMaxSum([1, 2, 5, 3, 4]);
