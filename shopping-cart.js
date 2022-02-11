const products = [
    { name: 'laptop', price: 45000 },
    { name:'shirt' , price:300},
    { name:'watch' , price:400},
    {name: 'phone' , price:7000}
];           
 let totalPrice =0;                                 // default  0 
 for(const product of products){                      // products=product
    totalPrice = totalPrice + product.price;           // add product
 }
 console.log(totalPrice);