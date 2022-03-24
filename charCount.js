function charCount(str) {
  let strLowerCase = str.toLowerCase().replace(/\s+/g, "");
  return strLowerCase.length;
}

console.log(charCount("Hello World!"));
