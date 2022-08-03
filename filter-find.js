const friends = ["Udhas", "Mahbub", "Shaba", "Niloy", "Faisal"];
const names = friends.filter((friend) => friend.length > 4);
 console.log(names);


const products = [
    { name: "tShirt", price: 400, color: "purple" },
    { name: "poloShirt", price: 900, color: "black" },
    { name: "shirt", price: 700, color: "white" },
    { name: "panjabi", price: 1000, color: "white" },
    { name: "pant", price: 900, color: "nevyBlue" },
  ];


  const expensive = products.filter(product => product.price > 500);
  const white = products.filter(product => product.color == 'white');
  console.log(expensive);
  console.log('white', white);


//   find   

const whiteItem = products.find(product=>product.color == 'white'); 
console.log(whiteItem)