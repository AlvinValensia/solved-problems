function arrayPlusArray(arr1, arr2) {
  let newArr = arr1.concat(arr2);

  function sumArr(a, b) {
    return a + b;
  }
  return newArr.reduce(sumArr);
}

console.log(arrayPlusArray([1, 2, 3], [1, 2, 3, 4]));
