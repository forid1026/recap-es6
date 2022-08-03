const friends = ["Udhas", "Mahbub", "Shaba", "Niloy", "Faisal"];
const numbers = [12, 3, 45, 78];

const doubleIt = numbers.map((x) => x * 2);
console.log(doubleIt);

const getName = friends.map((friend) => friend);
console.log(getName);

const products = [
  { name: "tShirt", price: 400, color: "purple" },
  { name: "poloShirt", price: 900, color: "black" },
  { name: "shirt", price: 700, color: "white" },
  { name: "pant", price: 900, color: "nevyBlue" },
];

const productNames = products.map((product) => product.name);
const productPrices = products.map((product) => product.price);
console.log(productNames);
console.log('product prices',productPrices);


// foreach
products.forEach(product => console.log(product));
