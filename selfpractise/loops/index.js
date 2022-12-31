// nested loops
// loop with in loop
// example gifts with commerce store
const products = ["Jacket", "Suit", "Truiser"];
const gifts = ["pen", "keychain", "locket" ];
for (let i = 0; i< products.length; i++){
    for(let j = 0 ; j< gifts.length; j++){
        console.log(products[i] + '-' + gifts[j]);
    }
}