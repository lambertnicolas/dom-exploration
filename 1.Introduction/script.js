function randomColor() {
    return Math.floor(Math.random() * 255);
}

document.title = "Modifying the DOM";
document.body.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;


const body = document.querySelector("body");
console.log(body.children);
