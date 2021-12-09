const products = [
    { name: 'macbook pro laptop', price: 190000 },
    { name: 'hp laptop', price: 121000 },
    { name: 'dell laptop', price: 50000 },
    { name: 'iphone', price: 192000 },
    { name: 'samsung phone', price: 96000 },
    { name: 'realme phone', price: 27000 },
    { name: 'apple smart watch', price: 62000 },
    { name: 'samsung watch', price: 18000 },
    { name: 'rolex watch', price: 55000 }
];

function searchProducts(products, search) {
    const matchedSearchResult = [];
    for (const goods of products) {
        const name = goods.name;
        name.toLocaleLowerCase(goods);
        if (name.indexOf(search) != -1) {
            matchedSearchResult.push(goods);
        }
    }
    return matchedSearchResult;
}

const getSearchResult = searchProducts(products, 'laptop');
console.log(getSearchResult);