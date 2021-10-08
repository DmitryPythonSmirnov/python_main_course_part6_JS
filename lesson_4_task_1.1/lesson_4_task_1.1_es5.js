/*
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name
и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
объект-прототип (как объект transport в уроке)
*/

"use strict";

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    // уменьшаем цену на 25%
    this.price *= 0.75;
};

let apple = new Product('яблоки', 100);
console.log(`Продукт: ${apple.name}`);
console.log(`Цена за 1 кг без скидки: ${apple.price} руб.`);

// Применяем скидку 25%
apple.make25PercentDiscount();
console.log(`Цена за 1 кг со скидкой 25%: ${apple.price} руб.`);