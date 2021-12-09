const products = [
    { name: 'macbook pro laptop', price: 190000 },
    { name: 'hp laptop', price: 121000 },
    { name: 'iphone', price: 192000 },
    { name: 'samsung phone', price: 96000 },
    { name: 'dell laptop', price: 50000 },
    { name: 'realme phone', price: 27000 },
    { name: 'apple smart watch', price: 62000 },
    { name: 'samsung watch', price: 18000 },
    { name: 'rolex watch', price: 55000 }
];

// for (const goods of products) {
//     if (goods.price < 96000) {
//         break;
//     }
//     console.log(goods);
// }


for (const goods of products) {
    if (goods.price < 100000) {
        continue;
    }
    console.log(goods);
}