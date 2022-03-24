function removeDupsArray(arr) {
  return [...new Set(arr)];
}

console.log(removeDupsArray([1, 2, 3, 3, 4, 4]));
