/*
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name
и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
объект-прототип (как объект transport в уроке)
*/

"use strict";

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        // уменьшаем цену на 25%
        this.price *= 0.75;
    }
}

let plum = new Product('сливы', 80);
console.log(`Продукт: ${plum.name}`);
console.log(`Цена за 1 кг без скидки: ${plum.price} руб.`);

// Применяем скидку 25%
plum.make25PercentDiscount();
console.log(`Цена за 1 кг со скидкой 25%: ${plum.price} руб.`);