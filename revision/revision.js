const count = 5;
const templateString = `this is template string ${count}`;

// object
const friends = [
  { id: 1, name: "udhas", job: "brac bank" },
  { id: 2, name: "mahbub", job: "nrbc bank" },
  { id: 3, name: "shaba", job: "Selsi" },
];
let udhas;
for (const friend of friends) {
  const names = friend;
  udhas = names.name;
}

const templateString2 = `this is template string ${udhas}`;
console.log(templateString2);

//single arrow function
const singleArrow = (num) => num / 5;
const divideByFive = singleArrow(25);
console.log("Single Arrow function", divideByFive);

// double param arrow function
const multiplyFunction = (num1, num2) => (num1 + 2) * (num2 + 2);
const result = multiplyFunction(10, 10);
console.log("MultiFunction", result);

// three param function
const threeParam = (num1, num2, num3) => num1 * num2 * num3;
const resultThree = threeParam(10, 10, 10);
console.log("Three param", resultThree);

// multiline arrow function
const multiLine = (num1, num2) => {
  const sum = num1 * num2;
  return sum;
};

const multiLineResult = multiLine(10, 10);
console.log("MultiLine Result", multiLineResult);

// map
const numbers = [12, 45, 78, 36, 45, 25,1,33];
const multiply = numbers.map((number) => number * 5);
console.log("Multiply", multiply);


// get odd number
const oddNumber = numbers.filter(num => {
    if(num%2 !=0){
        console.log(num);
    }
});