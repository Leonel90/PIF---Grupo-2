//asi hacemos aparecer y desaparecer la barra de navegacion
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { deley: 500});
ScrollReveal().reveal('.cards-banner-one', { deley: 500});
ScrollReveal().reveal('.cards-banner-two', { deley: 500});