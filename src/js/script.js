let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__list');

burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});

/* Slider */

$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});