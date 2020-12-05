var urlHost = 'http://localhost';
var port = ':3000';
var contactosPath = '/contactos';
let dataContact;

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    //body: urlencoded,
    redirect: 'follow'
};

fetch(urlHost + port + contactosPath, requestOptions)
    .then(response => response.json())
    .then(result => {
        dataContact = result;
        displayContacts(dataContact);
    })
    .catch(error => console.log('error', error));


function displayContacts(data) {
    console.log(data);
}