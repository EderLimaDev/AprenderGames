const kidsImage = document.querySelector("#back-img");
const buttonNav = document.querySelector(".navbar-toggler");

buttonNav.addEventListener("click", () => {
    kidsImage.classList.toggle("hidden");
    
})



var fields = {};

document.addEventListener('DOMContentLoaded', function () {
    fields.userName = document.getElementById("#userName");
    fields.userMail = document.getElementById("#userMail");
    fields.userMessageText = document.getElementById("#userMessageText");
})

function isNotEmpty(value) {
    if(value == null || typeof value == 'undefined') return false;

    return (value.length > 0);
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

function fieldValidation(field, validationFunction) {
    if(field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if(!isFieldValid) {
        field.className ='placeholderRed';

    } else {
        field.className = '';
    }
    return isFieldValid;
}

function isValid() {
    var valid = true;

    valid &= fieldValidation(fields.userName, isNotEmpty);
    valid &= fieldValidation(fields.userMail, isNotEmpty);
    valid &= fieldValidation(fields.userMessageText, isNotEmpty);

    return valid;
}

class User {
    constructor(userName, userMail, userMessageText) {
        this.userName = userName;
        this.userMail = userMail;
        this.userMessageText = userMessageText;
    }
}

function sendContact() {
    if(isValid()) {
        let usr = new User(userName.value,userMail.value, userMessageText.value);

        alert(`${usr.userName} Obrigado pela Mensagem!!!`)
    } else {
        alert("Verificar se todos os Campos foram preenchidos corretamente!")
    }

}