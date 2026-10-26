const btnMovile = document.querySelector('.btn-menu');

const menuMobile = document.getElementById('menu-mobile');

//manejo del evento click
document.addEventListener('click', (e) => {
    if (e.target === btnMovile) {
        return menuMobile.classList.toggle('open')
    }

    menuMobile.classList.remove('open')
})

//manejo del evento scroll
document.addEventListener('scroll', () => {

    menuMobile.classList.remove('open')
})