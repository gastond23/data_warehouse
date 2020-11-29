//Declaración de las variables para controlar el menu

let loginLink = document.getElementById('login_link');
let signUpLink = document.getElementById('signup_link');
let statusIni = true;

//Control de secciones para mostrar u ocultar

let loginSection = document.getElementsByClassName('login-section');
let signUpSection = document.getElementsByClassName('signup-section');


//Funciones para controlar las clases activas del menu y formularios para crear y loguear usuario

signUpLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (statusIni == true) {
        statusIni = false;
        loginLink.classList.remove('active');
        loginSection[0].classList.remove('active');
        signUpLink.classList.add('active');
        signUpSection[0].classList.add('active');
    }
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (statusIni == false) {
        statusIni = true;
        signUpLink.classList.remove('active');
        signUpSection[0].classList.remove('active');
        loginLink.classList.add('active');
        loginSection[0].classList.add('active');
    }
})