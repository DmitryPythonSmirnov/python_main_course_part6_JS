/*
Перед вами находится массив с продуктами, сегодня распродажа
и вам нужно на каждый товар применить скидку 15%
*/

"use strict";

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

let discount = 0.15;
products.forEach(function (product) {
    product.price = Math.round(product.price * (1 - discount) * 100) / 100;
});

console.log(products);