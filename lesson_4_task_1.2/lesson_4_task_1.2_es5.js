/*
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
видео -> 3 примеры наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
highlighted значение true
*/

"use strict";

// Конструктор объектов типа Post
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

// Метод edit для объектов типа Post
Post.prototype.edit = function (text) {
    this.text = text;
};

// Конструктор объектов типа AttachedPost
function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

// Для объектов типа AttachedPost наследуем методы из конструктора Post
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

// Создаём собственный метод makeTextHighlighted для объектов типа AttachedPost
AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};


/*   Проверка   */

// Создаём объект типа Post
let post1 = new Post('Петя', 'Привет, Вася!', '2021-10-07');

console.log(`Автор первого поста: ${post1.author}; текст поста: ${post1.text}; дата поста: ${post1.date}`);

// Редактируем первый пост
post1.edit('Привет, Василий Иванович!');

console.log(`Автор поста: ${post1.author}; текст поста: ${post1.text}; дата поста: ${post1.date}`);

// Создаём объект типа AttachedPost
let post2 = new AttachedPost('Вася', 'Привет, Петя!', '2021-10-08');

console.log(`Автор второго поста: ${post2.author}; текст поста: ${post2.text}; дата поста: ${post2.date}; подсветка: ${post2.highlighted}`);

// Редактируем второй пост
post2.edit('Привет, Пётр Петрович!');

// Включаем подсветку второго поста
post2.makeTextHighlighted();

console.log(`Автор второго поста: ${post2.author}; текст поста: ${post2.text}; дата поста: ${post2.date}; подсветка: ${post2.highlighted}`);
