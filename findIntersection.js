function FindIntersection(strArr) {
  let singleItems = [];
  let repeatItems = [];
  strArr = strArr
    .join(",")
    .split(",")
    .sort((a, b) => {
      return a - b;
    });

  strArr.forEach((str) => {
    if (singleItems.indexOf(str) > -1) repeatItems.push(str);
    singleItems.push(str);
  });

  repeatItems.join(",");
  return repeatItems;
}

console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
