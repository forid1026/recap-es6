const numbers = [12,45,36,21,47,85];
const [first,second,three] = numbers;
console.log(three);

// default params arrow function
const defaultParam = (num1,num2,num3=7) => num1+num2+num3;
const sumNumber = defaultParam(12,12,20);
 console.log(sumNumber);