//Fonction RGBCOLOR
const couleurs =[];
function rgbColor() {
    for(let i=0; i<=2; i++){
        couleurs[i] = Math.floor(Math.random() * 255);
    }
    return couleurs;
}


// Tableau des membres
const member=[
"Nicolas",
"Henri",
"Latifa",
"Sebastien",
"Olivier",
"Quentin",
"Louis",
"Lydia",
"Marlène",
"Dorian",
"Duc",
"Anais",
"Steeve",
"Semih",
"Melih",
"Antoine",
"Kevin",
"Mariya",
"Mehdi",
"Arthur"];


function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }


for (let element of shuffle(member)){

    let newSection = document.createElement("section");
    const article = document.querySelector("article");
    article.appendChild(newSection);
    
//Création des -p-, y ajouter un membre
    let newP = document.createElement("p");
    const newMember = document.createTextNode(element);
    newP.appendChild(newMember);

//Ajouter p dans section
    newSection.appendChild(newP);

//Afficher un bgcolor aléatoire
    const sectionColor = rgbColor();
    newSection.style.backgroundColor = `rgb(${sectionColor})`;

//Changer la couleur du texte en fonction du bg
    let lightness = ((sectionColor[0] * 299) + (sectionColor[1] * 587) + (sectionColor[2] * 114)) / 1000;
    if (lightness <= 128) {
        newP.style.color = "white";
    }
}






