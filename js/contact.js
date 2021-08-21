const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const number = document.querySelector("#number");
const numberError = document.querySelector("#numberError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateForm(){
    event.preventDefault();

    if(name.value.trim().length > 1 ){
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if(number.value.trim().length === 8 ){
        numberError.style.display = "none";
    } else {
        numberError.style.display = "block";
    }

    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if(message.value.trim().length > 0 ){
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
}

form.addEventListener("submit",validateForm);

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternsMatches = regEx.test(email);
    return patternsMatches;
}


function submitForm() {
    success.innerHTML = '<div class="success">Your message has been sent</div>';
}

function submitFormFail() {
    success.innerHTML = '<div class="fail">Your message can´t be sent. Please fill the form correctly</div>';
}

form.addEventListener("submit",checkValidation);

function checkValidation() {
    if (checkLength(name.value, 1) && checkNumber(number.value, 8) && validateEmail(email.value) && checkLength(message.value, 0)) {
        submitForm();
        form.reset();
    } else {
        submitFormFail();
    }
}

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function checkNumber(value, len) {
    if (value.trim().length === len) {
        return true;
    } else {
        return false;
    }
}


