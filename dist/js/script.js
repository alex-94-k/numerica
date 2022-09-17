window.addEventListener('DOMContentLoaded', function(){
    /* Dropdown for math page */

    let dropList = document.querySelector('.main__list'),
        dropBtn = document.querySelector('.main__theme-button'),
        arrow = document.querySelector('.fa-angle-down');
    
    dropBtn.addEventListener('click', function(){
        dropList.classList.toggle('show');
        arrow.classList.toggle('rotate');
    });
});