let dataContact;
let url = 'http://localhost:3000/contactos';

let myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

let urlencoded = new URLSearchParams();

let requestOptions = {
    method: 'GET',
    headers: myHeaders
    //body: urlencoded
};

fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => {
        dataContact = result;
        displayContacts(dataContact);
    })
    .catch(error => console.log('error', error));


function displayContacts(data) {
    console.log(data);
}