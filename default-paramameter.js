function addNumber(num1, num2 = 0) {
  //   if (num2 == undefined) {
  //     num2 = 0;
  //   }
  const result = num1 + num2;
  return result;
}

const output = addNumber(10);
console.log(output);
