//Declaración de las variables para controlar el menu

let navLink = document.getElementsByClassName('nav-link');
let linkLocation = window.location.pathname;
let linkSignUpActive = '/signup';

//Funciones para controlar las clases activas del menu

if (linkSignUpActive == linkLocation) {
    navLink[0].classList.remove('active');
    navLink[1].classList.add('active');
} else {
    navLink[1].classList.remove('active');
    navLink[0].classList.add('active');
}