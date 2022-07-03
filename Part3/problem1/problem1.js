function playWithAsterik(n) {
  // Your Code Here  let pola= '';

  for (let x = 1; x <= n; x++) {
    for (let y = n - 1; y >= x; y--) {
      pola += " ";
    }

    for (let z = 1; z <= x; z++) {
      pola += "* ";
    }
    pola += "\n";
  }
  return pola;
}

console.log(playWithAsterik(5));
