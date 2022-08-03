const products=[
    
    {id: 1, name: 'dell laptop', price: 89000, color: 'silver'},
    {id: 2, name: 'hp laptop', price: 69000, color: 'silver'},
    {id: 3, name: 'asus laptop', price: 69000, color: 'black'},
    {id: 4, name: 'mobile phone', price: 12000, color: 'blue'},
    {id: 5, name: 'samsung', price: 30000, color: 'gray'},
    {id: 6, name: 'nokia 1200', price: 5000, color: 'gray'}
];

const lowestPrice = products.find(product => product.price == 5000);
console.log('Lowest Price Product', lowestPrice);