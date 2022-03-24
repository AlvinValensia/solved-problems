function multiTable(number) {
  const table = [];
  for (let i = 1; i <= 10; i++) {
    table.push(`${i} * ${number} = ${i * number}`);
  }
  return table.join("\n");
}

console.log(multiTable(5));
