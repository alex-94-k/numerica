window.addEventListener('DOMContentLoaded', function() {
    /* Burger */

    const menu = document.querySelector('.header__list'),
          burger = document.querySelector('.burger');

    burger.addEventListener('click', function(){
        burger.classList.toggle('burger__active');
        menu.classList.toggle('header__list__active');
    });

    /* Dropdown for math page */

    const dropDown = document.querySelector('.main__list');
    const dropBtn = document.querySelector('.main__theme-button');

    dropBtn.addEventListener('click', function(){
        dropDown.classList.toggle('show');
    });
});