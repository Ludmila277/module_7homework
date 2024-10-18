function Initialvalues(arr) {
  const uniqueNumbers = Array.from(new Set(arr));
  return uniqueNumbers.sort((a, b) => a - b);
}

const numbers = [3, 4, 0];
const toSortedNums = Initialvalues(numbers);

console.log(toSortedNums);
