let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__list');

burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});

/* Slider */

$(document).ready(function(){
    $('.carousel__inner').slick({
        spedd: 1200,
        adaptiveHeight: true,
    });
  });