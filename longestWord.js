function LongestWord(sen) {
  sen = sen.trim().replace(/[^a-zA-z0-9 ]/g, "");
  console.log(sen);
  let longestWord = "";

  sen = sen.split(" ").forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}
console.log(LongestWord("fun&!! time"));
