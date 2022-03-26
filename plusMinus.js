function plusMinus(arr) {
  let ratio = {
    pos: 0,
    neg: 0,
    zero: 0,
  };

  arr.forEach((n) => {
    if (n > 0) {
      ratio.pos++;
    } else if (n < 0) {
      ratio.neg++;
    } else if (n === 0) {
      ratio.zero++;
    }
  });

  Object.keys(ratio).forEach((e) => {
    console.log((ratio[e] / arr.length).toFixed(6));
  });
}

plusMinus([-4, 3, -9, 0, 4, 1]);
