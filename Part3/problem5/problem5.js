function meanMedian(arrayInput) {
  function mean(arr) {
    let sum = 0;

    for (let num of arr) {
      sum += num;
    }
    return sum / arr.length;
  }

  function median(arr) {
    arr = arr.sort((a, b) => a - b);
    if (arr.length % 2 !== 0) {
      return arr[Math.floor(arr.length / 2)];
    }
  }

  console.log(mean([1, 2, 3, 4]));
  console.log(mean([1, 2, 3, 4, 5]));
  console.log(mean([7, 8, 9, 13, 15]));
  console.log(mean([10, 20, 30, 40, 50]));
  console.log(mean([15, 20, 30, 60, 120]));

  console.log(median([1, 2, 3, 4]));
  console.log(median([1, 2, 3, 4, 5]));
  console.log(median([7, 8, 9, 13, 15]));
  console.log(median([10, 20, 30, 40, 50]));
  console.log(median([15, 20, 30, 60, 120]));
}
