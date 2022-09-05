let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__list');

burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});