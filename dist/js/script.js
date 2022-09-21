window.addEventListener('DOMContentLoaded', function(){
    /* Burger */

    const menu = document.querySelector('.header__list'),
          menuItem = document.querySelector('.burger__span'),
          burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger__active');
        menu.classList.toggle('header__list__active');
    });

    /* Dropdown for math page */

    let dropList = document.querySelector('.main__list'),
        dropBtn = document.querySelector('.main__theme-button'),
        arrow = document.querySelector('.fa-angle-down');
    
    dropBtn.addEventListener('click', function(){
        dropList.classList.toggle('show');
        arrow.classList.toggle('rotate');
    });
});