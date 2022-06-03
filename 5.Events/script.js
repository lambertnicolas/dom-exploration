const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
/* -1---- */
let getStyle = actionSquare.getAttribute("class");

let selectSection = document.querySelectorAll("section");
function addNewDiv(){

    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "displayedsquare displayedsquare-wrapper ." + getStyle + "");
    selectSection[0].appendChild(newDiv);
    
/* -2---- */
let newLi = document.createElement("li");
const putLi = document.querySelector("ul");
let newContent = document.createTextNode("Action done !");
newLi.appendChild(newContent);
putLi.appendChild(newLi);
/* -2---- */

}
/* -1---- */



/* -1---- */
  actionSquare.addEventListener('click', addNewDiv)
/* -1---- */


}

/*
Everytime the user clicks on one of the action squares
- Create a new <div> with a class .displayedsquare and the corresponding clicked color in 
the div above (.displayedsquare-wrapper)
- Create a new <li> in the log below to state when the action was done 
*/


// //Fonction pour créer une div de la même couleur que la div initiale
// function addDiv () {

//   //Récupérer la couleur de la div initiale
//   //let colorInitial = document.querySelector('.actionsquare').style.backgroundColor;
  
//   let newDiv = document.createElement("div");
//   newDiv.classList.add("displayedsquare");
//   const main = document.querySelector("main");
//   const section = main.children[0];
//   section.appendChild(newDiv);
// }

// // const green = document.querySelector('.green');
// // const violet = document.querySelector('.violet');
// // const orange = document.querySelector('.orange');



//Fonction RGBCOLOR
const couleurs =[];
function rgbColor() {
    for(let i=0; i<=2; i++){
        couleurs[i] = Math.floor(Math.random() * 255);
    }
    return couleurs.join(',');
}

document.addEventListener('keydown', function (event) {
  //Changer le BackgroundColor du body quand on press space.
  if (event.code === 'Space') {
    document.body.style.backgroundColor = `rgb(${rgbColor()})`;
  }
});

