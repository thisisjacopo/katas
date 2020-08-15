function hello(name) {
  if (!name) {
    return "Hello, World!";
  } else {
    let lowName = name.toLowerCase();
    let printName = lowName.charAt(0).toUpperCase() + lowName.slice(1);
    return `Hello, ${printName}!`;
  }
}
