const input = document.querySelector("#loginInput");
const button = document.querySelector(".loginBtn");
const form = document.querySelector('.loginForm');


const validateInput = ({target}) => {
    if(target.value.length > 2) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('player', input.value);
    window.location = '../pages/game.html';
}



input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);