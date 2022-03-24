function ensureQuestion(s) {
  if (s.includes("?")) {
    return s;
  } else {
    return `${s}?`;
  }
}

console.log(ensureQuestion("are you a guy"));
