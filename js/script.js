/**
 * Переключение темы
*/
const lightThemeButtonElement = document.querySelector(".light-theme-button");
const darkThemeButtonElement = document.querySelector(".dark-theme-button");

lightThemeButtonElement.onclick = function () {
  lightThemeButtonElement.classList.add("is-active");
  darkThemeButtonElement.classList.remove("is-active");
  document.body.classList.remove("is-dark");
}

darkThemeButtonElement.onclick = function () {
  darkThemeButtonElement.classList.add("is-active");
  lightThemeButtonElement.classList.remove("is-active");
  document.body.classList.add("is-dark");
}

/**
 * Переключение шрифта
 */
let sansSerifButton = document.querySelector(".font-button-sans-serif");
let serifButton = document.querySelector(".font-button-serif");

sansSerifButton.onclick = function () {
  sansSerifButton.classList.add("is-active");
  serifButton.classList.remove("is-active");
  document.body.classList.remove("is-serif");
}

serifButton.onclick = function () {
  serifButton.classList.add("is-active");
  sansSerifButton.classList.remove("is-active");
  document.body.classList.add("is-serif");
}

/**
 * Сокращенный текст статьи > укороченный
 */
let blogArticleElements = document.querySelectorAll(".blog-article");

for (let blogArticleElement of blogArticleElements) {
  let moreButton = blogArticleElement.querySelector(".more");

  moreButton.onclick = function () {
    blogArticleElement.classList.remove("short");
  };
}

/**
 * Переключение раскладки карточек
 */
let gridButton = document.querySelector(".card-view-button-grid");
let listButton = document.querySelector(".card-view-button-list");
let cardsList = document.querySelector(".rent__container");

gridButton.onclick = function () {
  cardsList.classList.remove("list");
  gridButton.classList.add("is-active");
  listButton.classList.remove("is-active");
}

listButton.onclick = function () {
  cardsList.classList.add("list");
  listButton.classList.add("is-active");
  gridButton.classList.remove("is-active");
}

/**
 * Галерея
 */
let activePhoto = document.querySelector(".gallery__active-img");
let previews = document.querySelectorAll(".gallery__list a");

for (let preview of previews) {
  preview.onclick = function (evt) {
    evt.preventDefault();

    let currentActive = document.querySelector(".gallery__list .gallery__link_active");
    currentActive.classList.remove("gallery__link_active");
    preview.classList.add("gallery__link_active");

    activePhoto.src = preview.href;
  };
}