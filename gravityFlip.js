const flip = (d, a) => {
  if (d === "R") {
    return a.sort(function (a, b) {
      return a - b;
    });
  } else if (d === "L") {
    return a.sort(function (a, b) {
      return b - a;
    });
  }
};

console.log(flip("R", [3, 5, 2, 1]));
