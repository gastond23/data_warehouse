//Declaracion de variables para el formulario de creación de usuarios
let nombre = document.getElementById('nombre_signup');
let apellido = document.getElementById('apellido_signup');
let email = document.getElementById('email_signup');
let perfil = document.getElementById('perfil_signup');
let passOne = document.getElementById('pass_signup');
let passTwo = document.getElementById('repeat_pass');
let overlaySignUp = document.getElementsByClassName('overlay-signup');


function signUpFunction() {
    debugger;
    let statusForm = true;
    if (nombre.value.length == 0) {
        msgError[2].classList.add('visible-msg');
        statusForm = false;
    }
    if (apellido.value.length == 0) {
        msgError[3].classList.add('visible-msg');
        statusForm = false;
    }
    if (email.value.length == 0) {
        msgError[4].classList.add('visible-msg');
        statusForm = false;
    }
    if (perfil.value.length == 0) {
        msgError[5].classList.add('visible-msg');
        statusForm = false;
    }
    if (perfil.value == 'admin' || perfil.value == 'Admin') {
        perfil.value = 1;
    } else {
        perfil.value = 0;
    }
    if (passOne.value.length <= 7) {
        msgError[6].classList.add('visible-msg');
        statusForm = false;
    }
    if (passOne.value != passTwo.value) {
        console.log(passOne);
        console.log(passTwo);
        msgError[7].classList.add('visible-msg');
        statusForm = false;
    }
    if (statusForm == true) {
        let url = "http://localhost:3000/usuario";
        let urlencoded = new URLSearchParams();
        urlencoded.append("name", nombre.value);
        urlencoded.append("lastname", apellido.value);
        urlencoded.append("email", email.value);
        urlencoded.append("perfil", perfil.value);
        urlencoded.append("password", passTwo.value);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                overlaySignUp[0].classList.add('over-active');
                setTimeout(overlayFunc, 3000);
            })
            .catch(error => console.log('error', error))
    }
}

function overlayFunc() {
    overlaySignUp[0].classList.remove('over-active');
    statusIni = true;
    signUpLink.classList.remove('active');
    signUpSection[0].classList.remove('active');
    loginLink.classList.add('active');
    loginSection[0].classList.add('active');
}