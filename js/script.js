/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

let removeBlock = document.querySelectorAll(".promo__adv img");
let poster = document.querySelector(".promo__bg");
let genre = poster.querySelector(".promo__genre");
let moveList = document.querySelector(".promo__interactive-list");

genre.innerHTML = "<p>Драма</p>";
poster.style.backgroundImage = 'url("img/bg.jpg")';

removeBlock.forEach((item) => {
  item.remove();
});

movieDB.movies.sort();

moveList.innerHTML = "";

movieDB.movies.forEach((item, i) => {
  moveList.innerHTML += `
  <li class="promo__interactive-item">${i + 1}. ${item}
  <div class="delete"></div>
</li>
    `;
});
