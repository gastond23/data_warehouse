let progressBar = document.getElementsByClassName('progress-bar');
let greenBar = 'bg-success'
let blueBar = 'bg-info';
let yellowBar = 'bg-warning';
let redBar = 'bg-danger';
let value;
let inputId = document.getElementById('inputId');
let formContenedor = document.getElementsByClassName('form-contenedor');

let contactId;

if (progressBar.length > 0) {
    for (let bar of progressBar) {
        value = bar.getAttribute('aria-valuenow');
        bar.style.width = value + "%";
        if (value <= 25) {
            bar.classList.add(greenBar);
        } else if (value > 25 && value <= 50) {
            bar.classList.add(blueBar);
        } else if (value > 50 && value <= 75) {
            bar.classList.add(yellowBar);
        } else if (value > 75) {
            bar.classList.add(redBar);
        }
    }
}

function editContact(id) {
    contactId = id;
    inputId.value = contactId;
    formContenedor[0].classList.add('active');
}

function deleteContact(id) {
    contactId = id;
    let urlencoded = new URLSearchParams();
    urlencoded.append('id', contactId);
    requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: urlencoded
    };
    fetch("http://localhost:3000/contactos", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            conctactId = 0;
            location.reload();
        })
        .catch(err => {
            console.log(err);
        })
}