function BracketMatcher(str) {
  let leftBracket = 0;
  let rightBracket = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      leftBracket++;
    } else if (str[i] === ")") {
      rightBracket++;
    }
  }

  return (result = leftBracket === rightBracket ? 1 : 0);
}

console.log(BracketMatcher("((hello)(world))"));
