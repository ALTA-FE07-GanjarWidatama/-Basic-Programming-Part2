// Your Code Here
function drawXYZ(high) {
  let print = "";
  for (let i = 1; i <= high * high; i++) {
    let str = "";
    if (i % 3 == 0) {
      str += "X ";
    } else {
      if (i % 2 == 0) {
        str += "Z ";
      } else {
        str += "Y ";
      }
      break;
    }

    if (i % high == 0) str += "\n";
    print += str;
  }

  console.log(print);
}

drawXYZ(10);

console.log(drawXYZ(3));
console.log(drawXYZ(5));
console.log(drawXYZ(1));
