//Ajouter un title aux p dont la class est -important-

const title = document.querySelectorAll('.important');
title.forEach(function(element) {
    element.setAttribute('title', 'This is an important item');
});

//Display none sur les images qui n'ont pas la class : important
const notImportant = document.querySelectorAll("img:not(.important)");
notImportant.forEach(function (img) {
    img.style.display = "none";
});

//Afficher le contenu des paragraphes et le nom de la class si il en a un.
const paragraphe = document.querySelectorAll("p");
paragraphe.forEach(function (p) {
    console.log(p.innerHTML);
    console.log(p.className);
});

//Donner un textcolor random à chaque paragraphe
//Fonction RGBCOLOR
const couleurs =[];
function rgbColor() {
    for(let i=0; i<=2; i++){
        couleurs[i] = Math.floor(Math.random() * 255);
    }
    return couleurs.join(",");
}

//Changement style.color
const paragrapheColor = document.querySelectorAll("p");
paragrapheColor.forEach(function (p) {
    p.style.color = `rgb(${rgbColor()})`;
});

