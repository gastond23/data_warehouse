let progressBar = document.getElementsByClassName('progress-bar');
let greenBar = 'bg-success'
let blueBar = 'bg-info';
let yellowBar = 'bg-warning';
let redBar = 'bg-danger';
let value;



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

