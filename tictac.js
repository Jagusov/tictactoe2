const gamestatusDiv = document.querySelector(".gamestatus");
const boxDivs = document.querySelectorAll(".box");

//game actions
let gameStart = true;
let P1Turn = true;
let winner = null;

//event handlers

const restart = () => {
  P1Turn = true;
  gamestatusDiv.innerHTML = "Player 1 is next";
  for (const boxDiv of boxDivs) {
    boxDiv.classList.remove("x");
    boxDiv.classList.remove("o");
  }
};

const maketurn = (e) => {
  const hitMarkers = e.target.classList;
  const location = hitMarkers[1];

  if (hitMarkers[2] === "x" || hitMarkers[2] === "o") {
    console.log("Occupied! Try something else");
    return;
  }

  if (P1Turn) {
    console.log("Player 1 hit", location);
    hitMarkers.add("x");
    gamestatusDiv.innerHTML = "Turn of Player 2!";
    P1Turn = !P1Turn;
  } else {
    console.log("Player 2 hit", location);
    hitMarkers.add("o");
    gamestatusDiv.innerHTML = "Turn of Player 1!";
    P1Turn = !P1Turn;
  }
};

//event listeners

for (const boxDiv of boxDivs) {
  boxDiv.addEventListener("click", maketurn);
}
