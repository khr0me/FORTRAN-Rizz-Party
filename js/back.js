function border() {

    const divs = document.getElementsByClassName('inputForum');
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.borderWidth = '2px';
        divs[i].style.borderColor = 'black';
        divs[i].style.borderStyle = 'solid';
        divs[i].style.borderRadius = '10px';
    }

    const form = document.getElementsByClassName('msg');
    for (let i = 0; i < form.length; i++) {
        form[i].style.borderWidth = '2px';
        form[i].style.borderColor = 'black';
        form[i].style.borderStyle = 'solid';
        form[i].style.borderRadius = '10px';
    }

    const elements = document.getElementsByTagName('h1');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.borderLeft = '2px solid black';
    }
}

border();

function clearMSG() {
    document.getElementById('input').value = '';
}

function sendMSG() {
    const msg = document.getElementById('input').value;

    if (msg === '') {
        alert('Please fill in all fields');
    } else {
        alert('Message sent successfully');
    }

    clearMSG();
}