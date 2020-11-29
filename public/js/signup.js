let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

let urlencoded = new URLSearchParams();
urlencoded.append("name", "Gaston Dandre");
urlencoded.append("email", "gaston.dandre@gmail.com");
urlencoded.append("password", "admin1234");

let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
};

fetch("http://localhost:3000/usuario", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));