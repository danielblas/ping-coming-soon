let input = document.getElementsByClassName('input--text--input')[0];
let button = document.getElementsByClassName('input--button')[0];

button.addEventListener("click", emailValidation);

function emailValidation(email) {
    email = input.value;
    var email_patern = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (!email_patern.test(email)){
        if (!input.classList.contains("error")){
            input.classList.add("error");
            input.nextElementSibling.style.display = "block";
        } else {

        }
    } else {
        if (input.classList.contains("error")){
            input.classList.remove("error");
            input.nextElementSibling.style.display = "none";
        } else {

        }
    }

}

