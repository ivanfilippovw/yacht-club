// first task

let buttonLight = document.querySelector('.theme-button-light');
let buttonDark = document.querySelector('.theme-button-dark');
let buttonSans = document.querySelector('.font-button-sans-serif');
let buttonSerif = document.querySelector('.font-button-serif');

buttonDark.onclick = function () {
  document.body.classList.add('dark');
  buttonLight.classList.remove('active')
  buttonDark.classList.add('active');
};

buttonLight.onclick = function () {
  document.body.classList.remove('dark');
  buttonLight.classList.add('active')
  buttonDark.classList.remove('active');
};

buttonSerif.onclick = function () {
  document.body.classList.add('serif');
  buttonSans.classList.remove('active')
  buttonSerif.classList.add('active');
};

buttonSans.onclick = function () {
  document.body.classList.remove('serif');
  buttonSans.classList.add('active')
  buttonSerif.classList.remove('active');
};





// second task

let shortArticles = document.querySelectorAll('.blog-article');

for (let shortArticle of shortArticles) {
  let moreButton = shortArticle.querySelector('.more');
  moreButton.onclick = function () {
    shortArticle.classList.remove('short');
  }
};





// third task

let gridButton = document.querySelector('.card-view-button-grid');
let listButton = document.querySelector('.card-view-button-list');
let cardsList = document.querySelector('.cards');

listButton.onclick = function () {
  cardsList.classList.add('list');
  gridButton.classList.remove('active');
  listButton.classList.add('active');
};

gridButton.onclick = function () {
  cardsList.classList.remove('list');
  gridButton.classList.add('active');
  listButton.classList.remove('active');
};





//fourth task

let mainImage = document.querySelector('.active-photo');
let images = document.querySelectorAll('.slider a');


for (let activeImage of images) {

  activeImage.onclick = function (evt) {
    evt.preventDefault()
    mainImage.src = activeImage.href;
    let currentActive = document.querySelector('li .active-item');
    currentActive.classList.remove('active-item');
    activeImage.classList.add('active-item');
  };
};




