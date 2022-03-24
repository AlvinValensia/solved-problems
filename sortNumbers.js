function solution(nums) {
  return nums == undefined
    ? []
    : nums.sort(function (a, b) {
        return a - b;
      });
}

console.log(solution([1, 2, 10, 50, 5]));
console.log(solution(null));
