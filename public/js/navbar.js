//Declaración de las variables para controlar el menu
let navLink = document.getElementsByClassName('nav-link');
let linkLocation = window.location.pathname;
let linkSignUpActive = ['/', '/signup', '/contactos', '/companies', '/users', 'region_city'];
let itemContainer = document.getElementsByClassName('navbar-nav')

//Deshabilitar links

if(linkLocation == '/' || linkLocation == '/signup') {
    itemContainer[0].classList.add('flex-row-reverse');
    navLink[2].classList.add('d-none');
    navLink[3].classList.add('d-none');
    navLink[4].classList.add('d-none');
    navLink[5].classList.add('d-none');
} else {
    navLink[0].classList.add('d-none');
    navLink[1].classList.add('d-none');
}

//Funciones para controlar las clases activas del menu
for (let i = 0; i <= linkSignUpActive.length; i++) {
    if (linkSignUpActive[i] == linkLocation) {
        navLink[i].classList.add('active');
    } 
}