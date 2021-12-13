let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
let slides = document.querySelectorAll('.reviews .slide-container .slide');
let index = 0;


document.querySelectorAll('.faq .accordion-container .accordion').forEach(accordion =>{
    accordion.onclick = () =>{
        accordion.classList.toggle('active');
    }
})