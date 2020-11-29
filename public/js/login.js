let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

let msgError = document.getElementsByClassName('msg-help');

function loginFunction() {
    debugger;
    let url = "http://localhost:3000/login";
    let urlencoded = new URLSearchParams();
    urlencoded.append("email", document.getElementById('email_login').value);
    urlencoded.append("password", document.getElementById('pass_login').value);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {
            let data = result.token;
            const token = JSON.stringify(data);
            document.cookie = `access_token=${token}`;
        })
        .catch(error => {
            msgError[0].classList.add('visible-msg');
            msgError[1].classList.add('visible-msg');
        });
}