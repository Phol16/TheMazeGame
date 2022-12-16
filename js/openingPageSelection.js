const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
const start = document.getElementById("start");
easy.addEventListener("click", selectMode);
medium.addEventListener("click", selectMode);
hard.addEventListener("click", selectMode);
function selectMode(){
  if(this.id ==="easy"){
    easy.style.backgroundColor ="#2F2105"
    easy.style.color = "white"
    medium.style.backgroundColor ="#F9D9AA"
    medium.style.color = "black"
    hard.style.backgroundColor ="#F9D9AA"
    hard.style.color = "black"
    start.setAttribute("href", "easy.html")
  }
  if(this.id ==="medium"){
    easy.style.backgroundColor ="#F9D9AA"
    easy.style.color = "black"
    medium.style.backgroundColor ="#2F2105"
    medium.style.color = "white"
    hard.style.backgroundColor ="#F9D9AA"
    hard.style.color = "black"
    start.setAttribute("href", "medium.html")
  }
  if(this.id ==="hard"){
    easy.style.backgroundColor ="#F9D9AA"
    easy.style.color = "black"
    medium.style.backgroundColor ="#F9D9AA"
    medium.style.color = "black"
    hard.style.backgroundColor ="#2F2105"
    hard.style.color = "white"
    start.setAttribute("href", "hard.html")
  }
}