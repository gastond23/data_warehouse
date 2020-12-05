let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

let msgError = document.getElementsByClassName('msg-help');

let btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    let url = "http://localhost:3000/login";
    let urlencoded = new URLSearchParams();
    urlencoded.append("email", document.getElementById('exampleInputEmail1').value);
    urlencoded.append("password", document.getElementById('inputPassword6').value);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
    };

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {
            let token = result.token;
            document.cookie = "access_token=" + encodeURIComponent(token);
            window.location.href = 'http://localhost:3000/contacts';

        })
        .catch(err => {
            document.getElementById('exampleInputEmail1').classList.add('is-invalid');
            document.getElementById('inputPassword6').classList.add('is-invalid');
        });
})