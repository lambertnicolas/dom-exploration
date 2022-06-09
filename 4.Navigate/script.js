//Déplacer le dernier élément de la liste en 1ère position
const list = document.querySelector('ol');
list.insertBefore(list.lastElementChild,list.firstElementChild);


//Bouger le h2 de la 3ème section vers la 2ème et vice-versa
const main = document.querySelector("main");

const sectionDeux = main.children[0].nextElementSibling;
const titresectionDeux = sectionDeux.children[0];

const sectionTrois = sectionDeux.nextElementSibling;
const titresectionTrois = sectionTrois.children[0].children[0];

sectionDeux.insertBefore(titresectionTrois, titresectionDeux);
sectionTrois.children[0].insertBefore(titresectionDeux, sectionTrois.children[0].children[0]);


//Supprimer la dernière section du DOM
main.removeChild(main.lastElementChild);
