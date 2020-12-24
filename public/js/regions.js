let myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

let data;

let msgPopUp = document.getElementById('msg-popup');
let msgTitle = document.getElementById('msg-check');

let urlencoded = new URLSearchParams();

function createRegion() {
    let regionName = document.getElementById('region-name').value;
    if (regionName.length > 0) {
        urlencoded.append("regionName", `${regionName}`);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded
        };

        fetch("http://localhost:3000/region", requestOptions)
            .then(response => response.json())
            .then(result => {
                data = result;
                if (data.status == 400) {
                    msgPopUp.classList.add('error');
                } else {
                    msgPopUp.classList.add('ok');
                }
                msgTitle.innerText = data.msg;
                setTimeout(overlayPopUpMsg, 3000);
            })
            .catch(error => console.log('error', error));
    }
}

function createCountry() {
    
}

function overlayPopUpMsg() {
    if (data.status == 400) {
        msgPopUp.classList.remove('error');
    } else {
        msgPopUp.classList.remove('ok');
    }
    location.reload();
}