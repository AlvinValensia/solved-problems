function CodelandUsernameValidation(str) {
  if (str.length >= 4 && str.length <= 25) {
    if (typeof str[0] === "string") {
      if (str[str.length - 1] !== "_") {
        return true;
      }
    }
  } else {
    return false;
  }
}

console.log(CodelandUsernameValidation("u__hello_world123"));
