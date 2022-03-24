function sumOfDifferences(arr) {
  let sortArr = arr.sort(function (a, b) {
    return b - a;
  });

  let sumArr = 0;

  for (let i = 0; i < sortArr.length - 1; i++) {
    sumArr = sumArr + (arr[i] - arr[i + 1]);
  }
  return sumArr;
}

console.log(sumOfDifferences([2, 1, 10]));
