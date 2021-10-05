/*
Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1. Получить все товары, у которых есть фотографии.
2. Отсортируйте товары по цене (от низкой цены к высокой).
*/

"use strict";

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

// 1. Получить все товары, у которых есть фотографии.
const filtered_products = products.filter(function (product) {
    return ("photos" in product) && (product.photos.length != 0);
});

console.log(filtered_products);

// 2. Отсортируйте товары по цене (от низкой цены к высокой).
products.sort(function (product1, product2) {
    if (product1.price > product2.price) {
        return 1;
    }

    if (product1.price < product2.price) {
        return -1;
    }

    return 0;
});

console.log(products);
