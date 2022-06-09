const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  //Affiche la classList de la div cliquée
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  //Ajouter une div de la même couleur que la div initiale
  const newDiv = document.createElement("div");
  newDiv.style.display = "inline-block";
	newDiv.classList.add("displayedsquare", `${e.target.classList[1]}`);
  const main = document.querySelector("main");
  const section = main.firstElementChild;
  section.appendChild(newDiv);
  //Ajouter une li dans le log
  const list = document.querySelector("ul");
  let newLi = document.createElement("li");
  let newContent = document.createTextNode(`[${getElapsedTime()}] Created a new ${e.target.classList[1]} square`);
  newLi.appendChild(newContent); 
  list.appendChild(newLi);
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

//
//Actions éffectuées avec le clavier
//
//Fonction RGBCOLOR
const couleurs =[];
function rgbColor() {
    for(let i=0; i<=2; i++){
        couleurs[i] = Math.floor(Math.random() * 255);
    }
    return couleurs.join(',');
}

document.addEventListener('keydown', (event) => {
  //Changer le BackgroundColor du body quand on press space.
  if (event.code === 'Space') {
    document.body.style.backgroundColor = `rgb(${rgbColor()})`;
    //Ajouter une li dans le log
    const list = document.querySelector("ul");
    let newLi = document.createElement("li");
    let newContent = document.createTextNode(`[${getElapsedTime()}] Created a new background`);
    newLi.appendChild(newContent); 
    list.appendChild(newLi);
  }
  else if (event.key === "l") {
    const list = document.querySelector("ul");
		while (list.hasChildNodes()) {
			list.removeChild(list.firstChild);
		}
	}
  else if (event.key === "s") {
    const newDivClass = document.querySelector(".displayedquare-wrapper");
		while (newDivClass.hasChildNodes()) {
			newDivClass.removeChild(newDivClass.firstChild);
		}
	}
});


//
//Afficher une alerte quand on clic sur un newDiv
//
const clickOnNewSquare = (e) => {
  return alert(`The color of the square is ${e.target.classList[1]}`);
}

const actionNewSquares = document.querySelectorAll('.displayedquare-wrapper')
for (let actionNewSquare of actionNewSquares) {
  actionNewSquare.addEventListener('click', clickOnNewSquare)
}

