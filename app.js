let isMobileMenuOpened = false;

let menuMobile = document.querySelector('.nav__container--mobile');
let hamburger = document.querySelector('.hamburger');



function openMobileMenu () {
    if (isMobileMenuOpened === false) {
        menuMobile.classList.add('menuActive');
        hamburger.classList.add('menuActive');
        isMobileMenuOpened = true;
    }
    else {
        menuMobile.classList.remove('menuActive')
        hamburger.classList.remove('menuActive')
        isMobileMenuOpened = false;
    };
}

hamburger.addEventListener('click', openMobileMenu)