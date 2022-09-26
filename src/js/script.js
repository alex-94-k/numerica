window.addEventListener('DOMContentLoaded', function() {
    /* Burger */

    const menu = document.querySelector('.header__list'),
          burger = document.querySelector('.burger');

    burger.addEventListener('click', function(){
        burger.classList.toggle('burger__active');
        menu.classList.toggle('header__list__active');
    });

    /* list */

    const btn = document.querySelector('.main__button'),
        iconFirst = document.querySelector('.arrow-1'),
        iconSecond = document.querySelector('.arrow-2'),
        rightMenu = document.querySelector('.main__right-menu');

    btn.addEventListener('click', function(){
        iconFirst.classList.toggle('rotate');
        iconSecond.classList.toggle('rotate');
        rightMenu.classList.toggle('active');
    });

});