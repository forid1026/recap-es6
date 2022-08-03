const numbers = [12,43,4,12,90,78];

// simple math function
const maxNumber = Math.max(12,89,4);
// get max number in array using spread operation
const max = Math.max(...numbers);
console.log(maxNumber, max);

const numbers2 = [...numbers];
numbers.push(901);
console.log(numbers, numbers2);