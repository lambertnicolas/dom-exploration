//Afficher le texte de l'input en temps réel dans le span associé
//(A revoir, ne supprime pas les caractères, ajoute des "shift", etc..)
const inputFirstName = document.getElementById("firstname");
const displayFirstName = document.getElementById("display-firstname");
inputFirstName.addEventListener('keyup', (e) => {
    displayFirstName.textContent += `${e.key}`;
});

//Afficher la section a-hard-truth si l'âge encodé est >= 18
const inputAge = document.getElementById("age");
const visibleSection = document.getElementById("a-hard-truth");
inputAge.addEventListener("keyup", () => {
    if (inputAge.value >= 18) {
        visibleSection.style.visibility = "visible";
    } else {
        visibleSection.style.visibility = "hidden";
    }
});

//Afficher le champ en rouge si le mot de passe n'est pas assez long
//Ou qu'ils ne correspondent pas
const password = document.getElementById("pwd");
const passwordConfirm = document.getElementById("pwd-confirm");

let checkPassword = () => {
    password.addEventListener("keyup", () => {
        if (password.value.length < 6) {
            password.style.backgroundColor = "red";
        } else {
            password.style.backgroundColor = "white";
        }
    });
    passwordConfirm.addEventListener("keyup", () => {
        if (password.value != passwordConfirm.value) {
            passwordConfirm.style.backgroundColor = "red";
        } else {
            passwordConfirm.style.backgroundColor = "white";
        }
    });
};
checkPassword();

//Permettre de sélectionner un mode light ou dark
const mode = document.getElementById("toggle-darkmode");

mode.addEventListener("change", () => {
    switch (mode.value) {
        case "dark":
            document.body.style.background = "black";
            document.body.style.color = "white";
            break;
        case "light":
            document.body.style.background = "white";
            document.body.style.color = "black";
            break;
    }
});