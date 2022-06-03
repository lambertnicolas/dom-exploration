//Déplacer le dernier élément de la liste en 1ère position
const list = document.querySelector('ol');
const firstOne = list.children[0];
list.insertBefore(list.lastElementChild,firstOne);


//Bouger le h2 de la 3ème section vers la 2ème et vice-versa
const main = document.querySelector("main");
const sectionDeux = main.children[1];
const sectionTrois = main.children[2];
const titresectionTrois = main.children[1].children[0];
const titresectionDeux = main.children[2].children[0].children[0];

sectionTrois.insertBefore(titresectionTrois, main.children[2].children[0]);
sectionDeux.insertBefore(titresectionDeux, main.children[1].children[0]);
console.log(main.children[2].children[0].children[0]);

//Supprimer la dernière section du DOM
const lastSection = main.children[2];
console.log(lastSection);
main.removeChild(lastSection);