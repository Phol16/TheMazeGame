const startB = document.getElementById("start");
startB.addEventListener("mouseover", hover);
startB.addEventListener("mouseout", notHover);
function hover(){
  startB.style.backgroundColor="#2f2105c4"
  startB.style.color="black"
}
function notHover(){
  startB.style.backgroundColor="#2F2105"
  startB.style.color="white"
}